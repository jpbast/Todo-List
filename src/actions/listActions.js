const addAction = (text) => {
    return { type: "ADD_ITEM", text }
}

const removeAction = (id) => {
    return { type: "REMOVE_ITEM", id }
}

const editAction = (id, text) => {
    return { type: "EDIT_ITEM", id, text }
}

const checkDoneAction = (id) => {
    return { type: "CHECK_DONE", id }
}

export { addAction, removeAction, editAction, checkDoneAction };
