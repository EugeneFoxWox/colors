import ColorPanel from './components/colorPanel/ColorPanel';
import { useEffect, useState } from 'react';
import "react-color-palette/dist/css/rcp.css";
import { createContext, useContext } from 'react';
import './App.css';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import logo from './img/logocolor.svg';
import ExampleMaket from './components/exampleMaket/ExampleMaket';
import generateShadeColor from './helpers/generateShadeColor';


function App() {
  const [colors, setColors] = useState({
    primary: '#1c3da0',
    secondary: '#b73333',
    tertiary: '#af3393',
    quaternary: '#dae019',
  })
  

  let extraColors = Object.entries(colors).map(([name, hex]) => {
      return(
        {
          light: generateShadeColor(hex, 20),
          normal: hex ,
          dark: generateShadeColor(hex, -20)
        }
      )
  }) 
 
    
    
   
  

  
  const [theme, setTheme] = useState('light');
  const [tab, setTab] = useState('');

  

  
  const { t } = useTranslation();
  

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
  };

  const handleCopyToClipboard = (color) => {
    navigator.clipboard.writeText(color)
    toast.success('Успешно скопированное чудо ' + color)


  }

  
  return (
    <div className={theme === 'dark' ? 'dark-theme App' : 'App'}>
      <header className="App-header">
        <div>
          <img className='logo' src={logo} alt='' style={{ background: colors.primary,}}></img>
        </div>

        <div>
          <div className='switch-title'>Язык</div>
          <div class="switch-btn switch-on" style={{background: colors.secondary}}></div>
        </div>

        <div>
          <div className='switch-title' >Тема</div>
          <div class={theme === 'dark' ? "switch-btn switch-on::after" : "switch-btn switch-on"}
           onClick={toggleTheme}
           style={{background: colors.primary}}></div>
        </div>

        <button>Сохранить</button>
      </header>

      <section className='select-color'>
        <div className='main-block-select'>
          <div className='palitre'>
            <ColorPanel colors={colors} setColors={setColors}></ColorPanel>
            
          </div>

        </div>
        <input title='Имя палитры' placeholder="Имя палитры" className='name-pallete' type="text" />
        <button>Сохранить</button>
        <hr></hr>
        

        <div className='collection'>

      {extraColors.map((extra) => {
        
        return <div>
          <div className='d' style={{background: extra.light}} onClick={() => handleCopyToClipboard(extra.light)}>{extra.light}</div>
          <div className='d' style={{background: extra.normal}} onClick={() => handleCopyToClipboard(extra.normal)}>{extra.normal}</div>
          <div className='d' style={{background: extra.dark}} onClick={() => handleCopyToClipboard(extra.dark)}>{extra.dark}</div>
        </div>
        
      }
        
      )}
        
        
        
        </div>

      </section>
      <section>
        
      </section>
      <section className='section-maket'>
        <ExampleMaket 
          primary={colors.primary}
          secondary={colors.secondary}
          tertiary={colors.tertiary}
          quaternary={colors.quaternary}>

        </ExampleMaket>
      </section>


    </div>
  );
}

export default App;
