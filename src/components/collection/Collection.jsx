import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Collection.css';
import cn from 'classnames'
import trash from './../../img/trash.svg'


function Collection({ isOpen, closeCollection, selectPalette, collection, selectedPalette, deletePalette }) {
    const { t } = useTranslation();


    if (isOpen) {
        return (
            <div className='collection'>
                <header className='header'>
                    <h2>{t('app.bt-collection')}</h2>
                    <button className='close-button' onClick={closeCollection}>{t('app.bt-close')}</button>

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
                    <button className='button-delete' onClick={() => deletePalette(id)}>
                        <img src={trash}></img>
                    </button>
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