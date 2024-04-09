import ColorPanel from './components/colorItem/ColorPanel';
import { useEffect, useState } from 'react';
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/dist/css/rcp.css";

import './App.css';


function App() {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('ru');

    useEffect(() => {
        // Применение выбранной темы при загрузке страницы
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


  const [color, setColor] = useColor("hex", "#00FF00");


  return (
    <div className={theme === 'dark' ? 'dark-theme App' : 'App'}>
      <header className="App-header">
        <div>
          <div className='switch-title'>Язык</div>
          <div class="switch-btn switch-on"></div>
        </div>

        <div>
          <div className='switch-title' >Тема</div>
          <div class={theme === 'dark' ? "switch-btn switch-on::after" : "switch-btn switch-on"} onClick={toggleTheme}></div>
        </div>
        
      </header>

      <section className='select-color'>
        <div className='main-block-select'>
            <ColorPanel></ColorPanel>
            <div className= "color-picker">
            <ColorPicker
            width={600}
            height={300}
            color={color}
            onChange={setColor}
            hideHSV
            dark
            />
            </div>

        </div>
        
        <button className='button-generate'>Сгенерировать!</button>

         
        <div>
        Здесь коллекция
        </div>

      </section>
      
      
    </div>
  );
}

export default App;
