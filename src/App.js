import ColorPanel from './components/colorPanel/ColorPanel';
import { useEffect, useState } from 'react';
import "react-color-palette/dist/css/rcp.css";
import { createContext, useContext } from 'react';
import './App.css';
import logo from './img/logocolor.svg';
import ExampleMaket from './components/exampleMaket/ExampleMaket';

function App() {
  const [colors, setColors] = useState({
    primary: '#1c3da0',
    secondary: '#b73333',
    tertiary: '#af3393',
    quaternary: '#dae019',
  })
  

  const gallery = 0;
  const [theme, setTheme] = useState('light');

  

  const [language, setLanguage] = useState('ru');
  

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

        <button>Экспорт</button>
      </header>

      <section className='select-color'>
        <div className='main-block-select'>
          <div className='palitre'>
            <ColorPanel colors={colors} setColors={setColors}></ColorPanel>
            
          </div>

        </div>
        <input title='Имя палитры' placeholder="Имя палитры" className='name-pallete' type="text" />
        <button>Сохранить</button>
        

        <div>
          Здесь коллекция
        </div>

      </section>
      <section>
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
