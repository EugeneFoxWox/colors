import "./ExampleMaket.css"
function ExampleMaket({primary, secondary, tertiary, quaternary}) {

    return(
    <div className="maket">
        <div className="header" style={{background: primary}}>
            <h1>Заголовок уровня 1</h1>
        </div>
        
        <p>Этот элемент содержит обычный текст.</p>
        <button style={{background: secondary}}>Нажми меня</button>
        <button style={{background: tertiary}}>Нажми меня</button>
        <div className="block" style={{background: tertiary}}>Это блочный элемент, который может содержать другие элементы.
            <nav>
                <ul>
                    <li>Пункт 1</li>
                    <li>Пункт 2</li>
                </ul>
            </nav>
        </div>
    </div>
    );
};

export default ExampleMaket;