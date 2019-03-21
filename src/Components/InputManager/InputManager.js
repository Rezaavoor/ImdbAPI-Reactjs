import React from 'react';
import styleClasses from './InputManager.module.css';
const InputManager=(props)=>{
    return(
        <div className={styleClasses.searchDiv}>
            <input ref={input => input && input.focus()} onChange={props.inputChanged} value={props.name} className={styleClasses.searchInput} placeholder={'Movie name...'}></input>
            <button onClick={props.clicked} className={styleClasses.searchButton}>Search</button>
        </div>
    );
}
export default InputManager;