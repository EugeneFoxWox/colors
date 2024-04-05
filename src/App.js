import ColorItem from './components/colorItem/ColorItem';

import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/dist/css/rcp.css";

import './App.css';


function App() {


  const [color, setColor] = useColor("hex", "#00FF00");


  return (
    <div className="App">
      <header className="App-header">
        <div class="switch-btn switch-on"></div>
        <div>Язык</div>
      </header>
      <section>
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
        <ColorItem></ColorItem>

      </section>
      
      
    </div>
  );
}

export default App;
