import './ColorPanel.css'
import { useState } from 'react';
import cn from 'classnames'
import generateRandomColor from "../../helpers/generatePalette/generateRandomColor";
import generateContrastColor from "../../helpers/generatePalette/generateContrastColor";
import generateNeighboursColor from "../../helpers/generatePalette/generateNeighboursColor";
import ColorPicker from '../colorPicker/ColorPicker';
import { useTranslation } from 'react-i18next';


function ColorPanel({colors, setColors, theme}) {

  const { t } = useTranslation();

  const [selectedColor, setSelectedColor] = useState(null)
  const [selectedOption, setSelectedOption] = useState('');

  const handleChangeColor = (color) => {
    setColors({ ...colors, [selectedColor]: color.hex })
  }
  const handleRadioChange = (event) => {
    setSelectedOption(event.target.id);
  };

  const handleRandomAll = () => {
    switch(selectedOption){
      case 'random':
        setColors(generateRandomColor(colors));
        console.log(colors);
        break;
      case 'contrast':
        setColors(generateContrastColor(colors));
        console.log(colors);
        break;
        case 'neighbours':
          setColors(generateNeighboursColor(colors));
          console.log(colors);
          break;
    }
    
  }


  return (
    <div className='color-generate-box'>
      <section className='section-palette'>
        <div className='select-palette'>
          
          <input className="radio-palette-selection random"
             type="radio" id="random"
             name="palette-selection"
             checked={selectedOption == 'random'}
             onChange={handleRadioChange}
             />
          
           <input className="radio-palette-selection contrast"
             type="radio" id="contrast"
             name="palette-selection"
             checked={selectedOption === 'contrast'}
             onChange={handleRadioChange} />

           <input className="radio-palette-selection neighbours"
             type="radio" id="neighbours"
             name="palette-selection"
             checked={selectedOption === 'neighbours'}
             onChange={handleRadioChange} />
         </div>
    
      <div className='color-panel'>

        {Object.entries(colors).map(([name, hex]) => (
          <div
            key={name}
            className={cn('color-item', {
              active: name === selectedColor,
            })}
            style={{
              background: hex,
            }}
            onClick={() => setSelectedColor(name)}
          >
            {hex}
          </div>

        ))}

        

      </div>
      <button className='button-generate' onClick={handleRandomAll}>{t('bt-generate')}</button>
      </section>
      <section className='section-picker'>
        {selectedColor && (
          <ColorPicker selectColor={colors[selectedColor]} changeColor={handleChangeColor} />
        )}
      </section>
    </div>
      )
}

      export default ColorPanel;