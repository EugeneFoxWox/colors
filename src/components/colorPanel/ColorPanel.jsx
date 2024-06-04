import './ColorPanel.css'
import toast from 'react-hot-toast';
import { useState, useEffect, useRef  } from 'react';
import cn from 'classnames'
import generateRandomColor from "../../helpers/generatePalette/generateRandomColor";
import generateContrastColor from "../../helpers/generatePalette/generateContrastColor";
import generateNeighboursColor from "../../helpers/generatePalette/generateNeighboursColor";
import ColorPicker from '../colorPicker/ColorPicker';
import { useTranslation } from 'react-i18next';



function ColorPanel({colors, setColors}) {

  const { t } = useTranslation();
  const [selectedColor, setSelectedColor] = useState(null)
  const [selectedOption, setSelectedOption] = useState('start');
  const ref = useRef();

  const handleChangeColor = (color) => {
    setColors({ ...colors, [selectedColor]: color.hex })
  }

  
  const handleRadioChange = (event) => {
    setSelectedOption(event.target.id);
  };

  const handleRandomAll = () => {
    const generateBySelectedOption = {
      random: generateRandomColor,
      contrast: generateContrastColor,
      neighbours: generateNeighboursColor
    }
    const generateColor = generateBySelectedOption[selectedOption]
    setColors(generateColor(colors))
  }

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setSelectedColor(null);
    }
  };

  const handleCopyShare = () => {
    navigator.clipboard.writeText(window.location.href)
    toast.success(t('app.copy'))
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
 

  return (
    <div className='color-generate-box'>
      <section className='section-palette'>
        <h1>{t(`color-panel.select-palette.${selectedOption}`)}</h1>
        <div className='select-palette'>
          
          <input className="radio-palette-selection random"
             type="radio" id="random"
             name="palette-selection"
             checked={selectedOption === 'random'}
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
      <button className={selectedOption === 'start'? 'button-generate disabled' : 'button-generate'} disabled={selectedOption == 'start'} onClick={handleRandomAll}>{t('color-panel.bt-generate')}</button>
      <button onClick={handleCopyShare}>{t('color-panel.bt-share')}</button>
      </section>
      <section className='section-picker' >
        <div ref={ref}>
        {selectedColor &&(<>
          <h2>{t('color-panel.color-picker')}</h2>
          <ColorPicker selectColor={colors[selectedColor]} changeColor={handleChangeColor} />
        </>
          
        )}
        </div>
       
        
      </section>
    </div>
      )
}


      export default ColorPanel;