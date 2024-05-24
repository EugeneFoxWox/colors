import { useState } from 'react';
import './Collection.css';
import cn from 'classnames'


function Collection({ isOpen, closeCollection, selectPalette, collection, selectedPalette, deletePalette }) {



    if (isOpen) {
        return (
            <div className='collection'>
                <header className='header'>
                    <h2>Коллекция</h2>
                    <button onClick={closeCollection}>ПРИНЯТЬ</button>

                </header>
                <div className='main'>{collection.map((item) => {
                    const { id, ...colors } = item
                    return <div className='palette-item'>
                    <div className={cn('item', {
                        active: id === selectedPalette,
                    })} onClick={() => selectPalette(id, colors)}>

                        {Object.entries(colors).map(([name, hex]) => (
                            <div className='item-color'
                                key={name} style={{ background: hex }}></div>
                        ))}
                    </div>
                    <button onClick={() => deletePalette(id)}>БАН</button>
                    </div>
                })}
                </div>

                <footer className='footer'>

                </footer>

            </div>
        );
    } else {
        return null;
    }

}
export default Collection;