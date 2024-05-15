import toast from 'react-hot-toast';
import './CodePanel.css'

function CodePanel({extraColors, theme}) {

   const handleCopyToClipboard = (color) => {
      navigator.clipboard.writeText(color)
      toast.success('Успешно скопировано ' + color)
    }

    const handleCopyJSToClipboard = (extra) => {
      navigator.clipboard.writeText(document.getElementById(extra.name).innerText)
      toast.success('Успешно скопировано!')
    }
      
        return <div className='shade-palette'> 
        {extraColors.map((extra) => {

        return <div className={theme === 'dark' ? 'dark-theme color-shade' : 'color-shade'}>
        <div>
            <div >
            <div className='color-cell' style={{background: extra.light}}
               onClick={() => handleCopyToClipboard(extra.light)}></div>
               <p>{extra.light}</p>
            </div>
            <div>
            <div className='color-cell' style={{background: extra.normal}}
               onClick={() => handleCopyToClipboard(extra.normal)}></div>
               <p>{extra.normal}</p>
            </div>
            <div>
            <div className='color-cell' style={{background: extra.dark}}
               onClick={() => handleCopyToClipboard(extra.dark)}></div>
               <p>{extra.dark}</p>
            </div>
        </div>
         <code id= {extra.name} className={theme === 'dark' ? "dark-theme js-code" : "js-code"}
         onClick={() => handleCopyJSToClipboard(extra)}>
            {`:root{\n\t--${extra.name}-light: ${extra.light};
            \n\t--${extra.name}-normal: ${extra.normal};
            \n\t--${extra.name}-dark: ${extra.dark};\n}`}
         </code>
         
         </div>
        
        
        
      }
    )}
    </div>



}

export default CodePanel;