import "./ExampleMaket.css"
function ExampleMaket({extraColors}) {

    return(
    <div className="maket">
        <div className="header" style={{background: extraColors[0].normal}}>
            <h1>Заголовок уровня 1</h1>
        </div>
        <div className="content-maket">
        <p>Этот элемент содержит обычный текст.</p>
        <div className="button-block">
            <button style={{background: extraColors[1].normal}}>Нажми меня</button>
            <button style={{background: extraColors[1].dark}}>Нажми меня</button>
            <button style={{background: 'rgba(0, 0, 0, 0)', border: '1px solid' + extraColors[1].dark}}>Нажми меня</button>
        </div>
        <div className="radio-block">
            <input type="radio" id="choice1" name="contact" style={{background: extraColors[2].normal}}/>
            <label for="choice1">Email</label>

            <input type="radio" id="choice2" name="contact" style={{background: extraColors[2].dark}}/>
            <label for="contactChoice2">Phone</label>

            <input type="radio" id="choice3" name="contact" style={{background: 'rgba(0, 0, 0, 0)'}}/>
            <label for="choice3">Mail</label>
        </div>
        <div className="block" style={{background: extraColors[2].light}}>Это блочный элемент, который может содержать другие элементы.
            <nav>
                <ul>
                    <li>Пункт 1</li>
                    <li>Пункт 2</li>
                </ul>
            </nav>
        </div>
        <div>
        <code>const a = 123</code>
        </div>
        </div>
    </div>
    );
};

export default ExampleMaket;