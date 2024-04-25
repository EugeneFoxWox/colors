import toast from 'react-hot-toast';
import './CodePanel.css'

function CodePanel({extraColors}) {

   let copyJS = ""
   

   const handleCopyToClipboard = (color) => {
      navigator.clipboard.writeText(color)
      toast.success('Успешно скопированное чудо ' + color)
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
         <div>
         {copyJS = "extraColors = {" + extra + "}"}
         </div>
        </div>
        
        
      }
    )}
    </div>


}

export default CodePanel;