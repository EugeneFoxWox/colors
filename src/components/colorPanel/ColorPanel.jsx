import './ColorPanel.css'
import { useState } from 'react';
import cn from 'classnames'
import generateRandomColor from "../../helpers/generateRandomColor";
import ColorPicker from '../colorPicker/ColorPicker';

function ColorPanel({colors, setColors}) {

  const [selectedColor, setSelectedColor] = useState(null)

  const handleChangeColor = (color) => {
    setColors({ ...colors, [selectedColor]: color.hex })
  }

  const handleRandomAll = () => {
    setColors(generateRandomColor(colors))

  }

  return (
    <div className='color-generate-box'>
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

        {selectedColor && (
          <ColorPicker selectColor={colors[selectedColor]} changeColor={handleChangeColor} />
        )}

      </div>
      <button onClick={handleRandomAll}>Сгенерировать</button>
    </div>
      )
}

      export default ColorPanel;