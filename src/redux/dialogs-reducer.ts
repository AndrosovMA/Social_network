/** action_type*/
const UPDATE_MESSAGE_IN_STATE: string = 'UPDATE_MESSAGE_IN_STATE';
const ADD_MESSAGE_IN_STATE: string = 'ADD_MESSAGE_IN_STATE';

/** action creator*/
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

/** type*/
type DialogsUsersType = {
    id: number,
    user: string,
}
type MassagesUsersType = {
    id: number,
    message: string | undefined,
}
export type DialogsType = {
    dialogsUsers: Array<DialogsUsersType>,
    massagesUsers: Array<MassagesUsersType>,
    newMessageText: string | undefined
}
type ActionType = {
    type: string
    value?: string
}

const initialState = {
    dialogsUsers: [
        {id: 1, user: 'Max'},
        {id: 2, user: 'Ivan'},
        {id: 3, user: 'Georgy'},
        {id: 4, user: 'Olga'},
    ],
    massagesUsers: [
        {id: 1, message: "happy coding"},
        {id: 2, message: "good hacking"},
        {id: 3, message: "i'm learn TS"},
        {id: 4, message: "i'm learn react-router v.6"},
    ],
    newMessageText: '',
}

export const dialogsReducer = (state: DialogsType = initialState, action: ActionType) => {

    switch (action.type) {
        case UPDATE_MESSAGE_IN_STATE:
            return {
                ...state,
                newMessageText: action.value,
            }
        case  ADD_MESSAGE_IN_STATE:
            let newMassageUser = {
                id: state.massagesUsers.length + 1,
                message: state.newMessageText
            };
            return {
                ...state,
                massagesUsers: [...state.massagesUsers, newMassageUser],
                newMessageText: ''
            }
        default:
            return state;
    }
}
