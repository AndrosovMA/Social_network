import {RerenderEntireTree} from "../render";

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
}

export  type DialogsType = {
    dialogsUsers: Array<DialogsUsersType>,
    massagesUsers: Array<MassagesUsersType>,
}

export type State = {
    profile: ProfileType,
    dialogs: DialogsType,
}

let state: State = {
    profile: {
        posts: [
            {id: 1, message: 'Learn TypeScript', likeCount: 34},
            {id: 2, message: 'TypeScript no hard', likeCount: 3},
        ]
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
}
export {state};

const addPostInState = (message:string):void => {
    let newPost = {
        id:state.profile.posts.length + 1,
        message:message,
        likeCount:0
    }
    state.profile.posts.push(newPost);
    RerenderEntireTree(state);

}
export {addPostInState};
