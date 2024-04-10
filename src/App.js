import ColorPanel from './components/colorPanel/ColorPanel';
import { useEffect, useState } from 'react';
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/dist/css/rcp.css";
import useGenerateRandomColor from "./helpers/useGenerateRandomColor";

import './App.css';


function App() {
  const { fcolor, generateColor } = useGenerateRandomColor();
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
          <img src=""></img>
        </div>

        <div>
          <div className='switch-title'>Язык</div>
          <div class="switch-btn switch-on"></div>
        </div>

        <div>
          <div className='switch-title' >Тема</div>
          <div class={theme === 'dark' ? "switch-btn switch-on::after" : "switch-btn switch-on"} onClick={toggleTheme}></div>
        </div>
        
        <button></button>
      </header>

      <section className='select-color'>
        <div className='main-block-select'>
          <div className='palitre'>
            <ColorPanel color={fcolor} onChange={setColor}></ColorPanel>
            <ColorPanel color={fcolor}></ColorPanel>
            <ColorPanel color={fcolor}></ColorPanel>
            <ColorPanel color={fcolor}></ColorPanel>
          </div>
            

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
        <input title='ИМЯ' placeholder="Имя палитры" className='b' type="text"/>
        <button className='button-generate' onClick={generateColor}>Сгенерировать!</button>

         
        <div>
        Здесь коллекция
        </div>

      </section>
      
      
    </div>
  );
}

export default App;
