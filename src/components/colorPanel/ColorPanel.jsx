import './ColorPanel.css'
import { useState } from 'react';
import cn from 'classnames'
import generateRandomColor from "../../helpers/generateRandomColor";
import ColorPicker from '../colorPicker/ColorPicker';
import { useTranslation } from 'react-i18next';

function ColorPanel({colors, setColors}) {

  const { t } = useTranslation();

  const [selectedColor, setSelectedColor] = useState(null)

  const handleChangeColor = (color) => {
    setColors({ ...colors, [selectedColor]: color.hex })
  }

  const handleRandomAll = () => {
    setColors(generateRandomColor(colors))
    
  }

  return (
    <div className='color-generate-box'>
      <section className='section-pallete'>

     
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