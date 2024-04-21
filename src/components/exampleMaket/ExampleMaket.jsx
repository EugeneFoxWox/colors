import "./ExampleMaket.css"
function ExampleMaket({extraColors}) {

    return(
    <div className="maket" style={{background: extraColors[3].light}}>
        <div className="header" style={{background: extraColors[0].normal}}>
            <h1>Заголовок уровня 1</h1>
        </div>
        
        <p>Этот элемент содержит обычный текст.</p>
        <button style={{background: extraColors[1].normal}}>Нажми меня</button>
        <button style={{background: extraColors[1].dark}}>Нажми меня</button>
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
    );
};

export default ExampleMaket;