import {Action, DialogsType} from "./state";

/** action_type*/
const UPDATE_MESSAGE_IN_STATE: string = 'UPDATE_MESSAGE_IN_STATE';
const ADD_MESSAGE_IN_STATE: string = 'ADD_MESSAGE_IN_STATE';

/** action creator - conception Redux*/
export const updateNewMessageTextActionCreator = (symbol: string) => {
    return {
        type: UPDATE_MESSAGE_IN_STATE,
        value: symbol
    }
};
export const addMessageInStateActionCreator = () => {
    return {
        type: ADD_MESSAGE_IN_STATE,
    }
};

export const dialogsReducer = (action: Action, store: DialogsType)=> {
    switch (action.type) {
        case UPDATE_MESSAGE_IN_STATE:
            store.newMessageText = action.value;
            return store;
        case  ADD_MESSAGE_IN_STATE:
            let newMassageUser = {
                id: store.massagesUsers.length +1,
                message: store.newMessageText
            };
            store.massagesUsers.push(newMassageUser);
            store.newMessageText = '';
            return store;
        default:
            return store;
    }
}