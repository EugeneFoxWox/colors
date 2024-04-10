import ColorPanel from './components/colorPanel/ColorPanel';
import { useEffect, useState } from 'react';
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/dist/css/rcp.css";
import useGenerateRandomColor from "./helpers/useGenerateRandomColor";

import './App.css';


function App() {
  const { fcolor: colorPrimary, generateColor: generatePrimary } = useGenerateRandomColor();
  const { fcolor: colorSecondary, generateColor: generateSecodary } = useGenerateRandomColor();
  const { fcolor: colorThirdary, generateColor: generateThirdary } = useGenerateRandomColor();
  const { fcolor: colorFourthary, generateColor: generateFourthary } = useGenerateRandomColor();

  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('ru');
  const [color, setColor] = useColor("hex", "#00FF00");


  const handleGenerateAll = () => {
    generatePrimary()
    generateSecodary()
    generateThirdary()
    generateFourthary()
  }

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

        <button>Экспорт</button>
      </header>

      <section className='select-color'>
        <div className='main-block-select'>
          <div className='palitre'>
            <ColorPanel color={colorPrimary} onChange={setColor}></ColorPanel>
            <ColorPanel color={colorSecondary} onChange={setColor}></ColorPanel>
            <ColorPanel color={colorThirdary} onChange={setColor}></ColorPanel>
            <ColorPanel color={colorFourthary} onChange={setColor}></ColorPanel>
          </div>


          <div className="color-picker">
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
        <input title='ИМЯ' placeholder="Имя палитры" className='name-pallete' type="text" />
        <button className='button-generate' onClick={handleGenerateAll}>Сгенерировать!</button>


        <div>
          Здесь коллекция
        </div>

      </section>


    </div>
  );
}

export default App;
