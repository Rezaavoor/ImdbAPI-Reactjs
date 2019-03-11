import React from 'react';
import styleClasses from './InputManager.module.css';
const InputManager=(props)=>{
    return(
        <div className={styleClasses.searchDiv}>
            <input onChange={props.inputChanged} className={styleClasses.searchInput} placeholder={'Movie name...'}></input>
            <button onClick={props.inputChanged} className={styleClasses.searchButton}>Search</button>
        </div>
    );
}
export default InputManager;