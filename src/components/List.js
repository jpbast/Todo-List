import React from 'react';
import Checkbox from './Checkbox';
import Icons from './Icons';
import '../styles/List.css'
import { useSelector } from 'react-redux';

function List(props) {
    const list = useSelector(state => state)
    return (
        <ul>
            {list.map(item => {
                return (
                    <div key={item.id}>
                        <li>    
                            <Checkbox item={item}></Checkbox>
                            <Icons item={item} handleEdit={props.handleEdit}></Icons>
                        </li>                                      
                    </div>
                );
            })}
        </ul>
    );
}

export default List;