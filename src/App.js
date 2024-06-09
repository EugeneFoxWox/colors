import PalettePage from './components/palettePage/PalettePage'
import './App.css'

import { BrowserRouter as Router, Routes, Route, useParams, Navigate } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to={'/palettes'}></Navigate>}></Route>
        <Route path='/palettes' element={<PalettePage />}></Route>
        <Route path='/palettes/:paletteId' element={<PalettePage />}></Route>
      </Routes>
    </Router>
  )
}
export default App
