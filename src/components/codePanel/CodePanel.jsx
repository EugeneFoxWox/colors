import toast from 'react-hot-toast';
import './CodePanel.css'

function CodePanel({extraColors}) {

   let copyJS = `{/nprimary:`
 
   

   const handleCopyToClipboard = (color) => {
      navigator.clipboard.writeText(color)
      toast.success('Успешно скопировано ' + color)
    }
      
        return <div className='shade-palette'> {extraColors.map((extra) => {

        return <div className='color-shade'>
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
         <code id= 'js-code' className='js-code'>
            {`{\n\t--${extra.name}-light: ${extra.light};
            \n\t--${extra.name}-normal: ${extra.normal};
            \n\t--${extra.name}-dark: ${extra.dark};\n}`}
         </code>
         
         </div>
        
        
        
      }
    )}
    </div>



}

export default CodePanel;