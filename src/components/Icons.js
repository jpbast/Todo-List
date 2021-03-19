import React from 'react';
import { useDispatch } from 'react-redux'
import '../styles/Icons.css'
import { removeAction } from '../actions/listActions'

function Icons(props) {
    const dispatch = useDispatch();
    return (
        <div className="images">
            <div onClick={() => props.handleEdit(props.item)} className="bg-images">
                <img alt="edit" src="./assets/edit.png" width="50px"></img>
            </div>
            <div onClick={() => dispatch(removeAction(props.item.id))} className="bg-images">
                <img alt="trash" src="./assets/trash.png" width="25px"></img>
            </div>
        </div>
    );
}

export default Icons;