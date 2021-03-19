import React from 'react';
import Header from './components/Header';
import EnterAnItem from './components/EnterAnItem';
import './styles/App.css';
import listReducer from './reducers/listReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

function loadState() {
    const items = localStorage.getItem('list')
    if (items)
        return JSON.parse(items)
    else 
        return []
}

const store = createStore(listReducer, loadState());
store.subscribe(() => {
    let itemId = null;
    const list = store.getState()
    localStorage.setItem('list', JSON.stringify(list));
    list.forEach(item => { 
        itemId = item.id;
    })
    localStorage.setItem('id', JSON.stringify(itemId));
})

function App() {
    return (
        <div>
            <Provider store={store}>
                <Header></Header>
                <EnterAnItem></EnterAnItem>
            </Provider>
        </div>
    );
}

export default App;