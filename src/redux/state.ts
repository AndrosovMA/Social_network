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

export  type ProfileType = {
    posts: Array<PostType>,
    newPostText: string,
}

export  type DialogsType = {
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
    getState:()=> State
    addPostInState: (message: string) => void,
    updateNewPostText: (value: string) => void,
    subscribe: (observer: (store: Store) => void) => void
}


let store: Store = {
    _callSubscriber(store) {
        //уведосление подписчика по сути это RerenderEntireTree
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
    addPostInState(message) {
        let newPost = {
            id: this._state.profile.posts.length + 1,
            message: message,
            likeCount: 0
        }
        this._state.profile.posts.push(newPost);
        this._callSubscriber(store);
    },
    updateNewPostText(value) {
        this._state.profile.newPostText = value;
        this._callSubscriber(store);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}
export {store};





























