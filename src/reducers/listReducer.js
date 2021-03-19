import Item from '../components/Item';

function listReducer(state = [], action) {
    switch (action.type) {
        case "ADD_ITEM":
            let item = new Item(action.text);
            return ([...state, item]);    

        case "REMOVE_ITEM":
            return state.filter(list => list.id !== action.id);

        case "EDIT_ITEM":
            return state.map(item => item.id === action.id ? { id: action.id, text: action.text.value, done: item.done } : item )

        case "CHECK_DONE":
            return state.map(item => item.id === action.id ? { id: item.id, text: item.text, done: !item.done } : item)

        default:
            return state;
    }
}

export default listReducer;