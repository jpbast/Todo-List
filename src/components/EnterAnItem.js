import React, { useState } from 'react';
import List from './List';
import '../styles/EnterAnItem.css';
import { useDispatch } from 'react-redux';
import { addAction, editAction } from '../actions/listActions';

let edit = false;
let id = null;

function EnterAnItem() {
    const [buttonName, setButtonName] = useState("ADD");
    const dispatch = useDispatch();
    function addItem(e) {
        e.preventDefault();
        let text = document.querySelector('input');
        if (text.value) {   
            if (!edit) {
                dispatch(addAction(text.value))
                text.value = "";     
            } else {
                dispatch(editAction(id, text));
                edit = false;
                setButtonName("ADD");
            }
        }     
    }

    function handleEdit(item) {
        setButtonName("EDIT");
        edit = true;
        id = item.id;
        let input = document.querySelector('input');
        input.value = item.text;  
    }

    return ( 
        <div className="container">
            <div>
                <h1>ToDo List</h1>
                <h3>Add an item</h3>
                <form>
                    <input className="input-add" type="text" placeholder="Enter an item name"></input>
                    <button onClick={addItem}>{buttonName}</button>
                </form>
            </div>
            <List handleEdit={handleEdit}></List>
        </div>
    );
}

export default EnterAnItem;