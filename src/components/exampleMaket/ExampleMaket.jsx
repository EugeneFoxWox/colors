import "./ExampleMaket.css"
import { useTranslation } from 'react-i18next';
import { useState } from "react";
                
function ExampleMaket({extraColors}) {

    const { t } = useTranslation();

    const [switchBt1, setSwitch1] = useState('ok');

    const toggleSwitch1 = () => {
        const newSwitch = switchBt1 === 'ok' ? 'no' : 'ok';
        setSwitch1(newSwitch);
    }

    const [switchBt2, setSwitch2] = useState('ok');

    const toggleSwitch2 = () => {
        const newSwitch = switchBt2 === 'ok' ? 'no' : 'ok';
        setSwitch2(newSwitch);
    }

    return(
    <div className="maket">
        <div className="header" style={{background: extraColors[0].normal}}>
            <h1>{t('example.title')}</h1>
        </div>
        <div className="content-maket">
        <p>{t('example.p')}</p>
        <div className="button-block ">
            <div className="group">
            <button style={{background: extraColors[1].normal}}>{t('example.button')}</button>
            <button style={{background: extraColors[1].dark}}>{t('example.button')}</button>
            </div>
            <div className="group">
            <button style={{background: 'rgba(0, 0, 0, 0)', border: '1px solid' + extraColors[1].dark}}>{t('example.button')}</button>
            <button disabled='disabled' style={{background: '#ced4da'}}>{t('example.button')}</button>
            </div>
            
        </div>
        <div className="radio-block group">
            <input type="radio" id="choice1" name="contact" style={{background: extraColors[2].normal}}/>
            <label for="choice1">Email</label>

            <input type="radio" id="choice2" name="contact" style={{background: extraColors[2].dark}}/>
            <label for="contactChoice2">Phone</label>

            <input type="radio" id="choice3" name="contact" style={{background: 'rgba(0, 0, 0, 0)'}}/>
            <label for="choice3">Mail</label>
        </div>
        <div className="block" style={{background: extraColors[2].light}}>{t('example.block')}
            <nav>
                <ul>
                    <li>{t('example.dot')} 1</li>
                    <li>{t('example.dot')} 2</li>
                    <li>{t('example.dot')} 3</li>
                </ul>
                
            </nav>
        </div>
        <div className="code-block group">
        <code>const a = 123</code>
        <code>const b = 456</code>
        </div>
        <div className="input-block">
            <input className='input' type="text" id="name" name="name" style={{border: `2px solid ${extraColors[0].light}`, background: extraColors[3].dark}}/>
            <input className='input' type="text" id="name" name="name" style={{background: extraColors[2].light}}/>
            <input className='input' type="text" id="name" name="name" style={{border: `2px solid ${extraColors[2].light}`, background: '#fff0'}}/>
            <input className='input' disabled='disabled' type="text" id="name" name="name" style={{background: '#ced4da'}}/>
            <div className="group">
        </div>
        <div className="group">
            <div className={switchBt1 === 'ok'? 'switch switch-on::after' : 'switch switch-on'}
             style={{background: extraColors[switchBt1 == 'ok'? 1: 2].dark}}
             onClick={toggleSwitch1}></div>

             <div className={switchBt2 === 'ok'? 'switch switch-on::after' : 'switch switch-on'}
             style={{background: extraColors[switchBt2 == 'ok'? 0: 3].normal}}
             onClick={toggleSwitch2}></div>

             <div className='switch switch-on switch-off'></div>
            </div>
        </div>
        <div className="group progress-block">
            <div className="progress-bar" style={{background: extraColors[1].light}}>
                    <div className="progress-bar-inner" style={{height: '100%', width: '70%', background: extraColors[0].normal }}>70&</div>
            </div>
            <div className="progress-bar" style={{background: extraColors[1].dark}}>
                    <div className="progress-bar-inner" style={{height: '100%', width: '10%', background: extraColors[2].normal }}>10%</div>
            </div>
            <div className="progress-bar" style={{background: extraColors[1].dark}}>
                    <div className="progress-bar-inner" style={{height: '100%', width: '95%', background: extraColors[3].normal }}>95%</div>
            </div>
                
            
        </div>
        </div>
    </div>
    );
};

export default ExampleMaket;