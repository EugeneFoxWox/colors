import './ColorPanel.css'


function ColorPanel({id, color, isLock}){
    
    return(
        <div className="color-item" style={{backgroundColor: "#" + color}}></div>
    )

}

export default ColorPanel;