import React, { useState } from 'react';

const InputField = () => {
    const [inputValue, setInputValue] = useState('');
    const [completed, setCompleted] = useState(false);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const markAsCompleted = () => {
        setCompleted(!completed);
    };

    return (
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <button style={{ fontSize: '16px' }} onClick={markAsCompleted}>
                {completed ? 'Undo' : 'Mark as Completed'}
            </button>
            <div className="checkbox">
                {completed && (
                    <div className="checkbox-inner">
                        <span>&#10004;</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default InputField;