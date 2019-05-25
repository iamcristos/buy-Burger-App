import React from 'react';
import classes from './input.css'

const input = (props)=>{
    let inputElement = null
    const inputClass = [classes.InputElement];
    if (props.invalid && props.validation && props.touched) {
        inputClass.push(classes.Invalid)
    }
    switch (props.elementType) {
        case ('input'):
            inputElement = <input className= {inputClass.join(' ')}
            {...props.elementConfig} value={props.value} onChange={props.changed}/>;
            break;
        case ('textarea'):
            inputElement = <textarea className= {inputClass.join(' ')}
            {...props.elementConfig} value={props.value} onChange={props.changed}/>;
            break;
        case ('select'):
            inputElement = (
                <select className={inputClass.join(' ')}
                value={props.value} onChange={props.changed}>
                    {props.elementConfig.options.map(option =>(
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>))}
                </select>
            )
            break;
        default:
        inputElement = <input className= {inputClass.join(' ')}
        {...props.elementConfig} value={props.value}/>
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    )
}

export default input;