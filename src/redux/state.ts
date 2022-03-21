/** action_type conception Redux*/
const UPDATE_NEW_POST_TEXT: string = 'UPDATE_NEW_POST_TEXT';
const ADD_POST_IN_STATE: string = 'ADD_POST_IN_STATE';

/** description types*/
export type PostType = {
    id: number,
    message: string,
    likeCount: number,
}
export type DialogsUsersType = {
    id: number,
    user: string,
}
export type MassagesUsersType = {
    id: number,
    message: string,
}
export type ProfileType = {
    posts: Array<PostType>,
    newPostText: string,
}
export type DialogsType = {
    dialogsUsers: Array<DialogsUsersType>,
    massagesUsers: Array<MassagesUsersType>,
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
    value: string
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
            ]
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
        if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profile.newPostText = action.value;
            this._callSubscriber(store);

        } else if (action.type === ADD_POST_IN_STATE) {
            let newPost = {
                id: this._state.profile.posts.length + 1,
                message: action.value,
                likeCount: 0
            }
            this._state.profile.posts.push(newPost);
            this._state.profile.newPostText = '';
            this._callSubscriber(store);
        }
    }
}

/** action creator - conception Redux*/
export const updateNewPostTextActionCreator = (symbol: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        value: symbol
    }
};
export const addPostInStateActionCreator = (text: string) => {
    return {
        type: ADD_POST_IN_STATE,
        value: text
    }
};






























