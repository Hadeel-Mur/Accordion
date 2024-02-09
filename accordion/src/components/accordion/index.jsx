import React, { useState } from 'react';
import data from './data';
import './style.css';

function Accordian() {
    const [selected, setSelected] = useState(null);
    const [multiSelectionEnabled, setMultiSelectionEnabled] = useState(false);

    function handleSingleSelection(currentId) {
        setSelected(currentId === selected ? null : currentId);
    }

    function handleMultiSelection() {
        setMultiSelectionEnabled(!multiSelectionEnabled);
    }

    console.log(selected);

    return (
        <div className='wrapper'>
            <button onClick={handleMultiSelection}>
                {multiSelectionEnabled ? 'Disable All' : 'Enable All'}
            </button>
            <div className='accordion'>
                {data && data.length > 0 ? (
                    data.map(dataItem => (
                        <div className='item' key={dataItem.id}>
                            <div onClick={() => handleSingleSelection(dataItem.id)} className='title'>
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {multiSelectionEnabled || selected === dataItem.id ? (
                                <div className='content'>{dataItem.answer}</div>
                            )
                                : null}
                        </div>
                    ))
                ) : (
                    <div>No data found! </div>
                )}
            </div>
        </div>
    );
}

export default Accordian;
