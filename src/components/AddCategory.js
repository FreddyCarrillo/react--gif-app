import React, { useState } from 'react'
import PropTypes from 'prop-types';
import alertify from 'alertifyjs';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e) => {
        setinputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length >= 1){
            setCategories(cat => [inputValue]);
            setinputValue('');
        }else{
            alertify.error('Ingrese dato');
        }
        
    }

    return (
        <form id="formularioAnime" onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Realice su búsqueda"
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}