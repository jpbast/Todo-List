import React from 'react';
import '../styles/Checkbox.css';
import { useDispatch } from 'react-redux';
import { checkDoneAction } from '../actions/listActions'

function Checkbox(props) {
    const dispatch = useDispatch();
    return (
        <div>
            <input id={props.item.id} type="checkbox" defaultChecked={props.item.done} className="checkbox"></input>
            <label htmlFor={props.item.id} onClick={() => dispatch(checkDoneAction(props.item.id))} className={props.item.done ? "done" : ""}>
                {props.item.text}  
            </label>
            <span></span>
        </div>
    );
}

export default Checkbox;