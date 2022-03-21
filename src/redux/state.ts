import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

/** description types*/
export type PostType = {
    id: number
    message: string | undefined
    likeCount: number
}
export type DialogsUsersType = {
    id: number,
    user: string,
}
export type MassagesUsersType = {
    id: number,
    message: string | undefined,
}
export type ProfileType = {
    posts: Array<PostType>,
    newPostText: string | undefined,
}
export type DialogsType = {
    dialogsUsers: Array<DialogsUsersType>,
    massagesUsers: Array<MassagesUsersType>,
    newMessageText: string | undefined
}
export type State = {
    profile: ProfileType,
    dialogs: DialogsType,
}
export type Store = {
    _callSubscriber: (store: Store) => void,
    _state: State,
    getState: () => State
    subscribe: (observer: (store: Store) => void) => void
    dispatch: (action: Action) => void
}
export type Action = {
    type: string
    value?: string
}
export type ActionCreator = (text:string)=> Action;

export const store: Store = {
    _callSubscriber(store) {
        //уведомление подписчика  - по сути это RerenderEntireTree
    },
    _state: {
        profile: {
            posts: [
                {id: 1, message: 'Learn TypeScript', likeCount: 34},
                {id: 2, message: 'TypeScript no hard', likeCount: 3},
            ],
            newPostText: '',
        },
        dialogs: {
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
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    /** dispatch conception Redux*/
    dispatch(action: Action) {
        this._state.profile = profileReducer(action, store._state.profile);
        this._state.dialogs = dialogsReducer(action, store._state.dialogs);

        this._callSubscriber(store);
    }
}





























