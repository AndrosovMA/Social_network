export type Post = {
    id: number,
    message: string,
    likeCount: number,
}

export type DialogsUsers = {
    id: number,
    user: string,
}

export type MassagesUsers = {
    id: number,
    message: string,
}

export type State = {
    posts: Array<Post>,
    dialogsUsers: Array<DialogsUsers>,
    massagesUsers: Array<MassagesUsers>,
}


let state: State = {
    posts: [
        {id: 1, message: 'Learn TypeScript', likeCount: 34},
        {id: 2, message: 'TypeScript no hard', likeCount: 3},
    ],
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

export {state};