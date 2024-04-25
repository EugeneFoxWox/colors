import ColorPanel from './components/colorPanel/ColorPanel';
import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';
import "react-color-palette/dist/css/rcp.css";
import { createContext, useContext } from 'react';
import './App.css';

import CodePanel from './components/codePanel/CodePanel';
import { useTranslation } from 'react-i18next';
import logo from './img/logocolor.svg';
import ExampleMaket from './components/exampleMaket/ExampleMaket';
import generateShadeColor from './helpers/generateShadeColor';
import i18next from 'i18next';


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
  const [lng, setLng] = useState('ru');
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

  const changeLng = () => {
    const newLng = lng === 'ru' ? 'en' : 'ru';
    i18next.changeLanguage(newLng)
    setLng(newLng);
  }

  

  
  return (
    <div className={theme === 'dark' ? 'dark-theme App' : 'App'}>
      <header className="App-header">
        <div>
          <img className='logo' src={logo} alt='' style={{ background: colors.primary,}}></img>
        </div>

        <div>
          <div className='switch-title'>{t('lng')}</div>
          <div class={lng === 'en' ? "switch-btn switch-on::after" : "switch-btn switch-on"} style={{background: colors.secondary}}
        onClick={changeLng}></div>
        </div>

        <div>
          <div className='switch-title' >{t('theme')}</div>
          <div class={theme === 'dark' ? "switch-btn switch-on::after" : "switch-btn switch-on"}
           onClick={toggleTheme}
           style={{background: colors.primary}}></div>
        </div>

        <button>{t('bt-save')}</button>
      </header>

      <section className='select-color'>
        <div className='main-block-select'>
          <div className='palitre'>
            <ColorPanel colors={colors} setColors={setColors}></ColorPanel>
            
          </div>

        </div>

        <div className='collection'>
          <CodePanel extraColors={extraColors}></CodePanel>
        </div>

      </section>
      <section className='section-maket'>
        <ExampleMaket 
          extraColors = {extraColors}>
          
        </ExampleMaket>
      </section>


    </div>
  );
}
export default App;


