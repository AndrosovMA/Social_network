/** action_type*/
const UPDATE_NEW_POST_TEXT: string = 'UPDATE_NEW_POST_TEXT';
const ADD_POST_IN_STATE: string = 'ADD_POST_IN_STATE';

/** action creator*/
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

/** type*/
type PostType = {
    id: number
    message: string | undefined
    likeCount: number
}
export type ProfileType = {
    posts: Array<PostType>,
    newPostText: string | undefined,
}
type ActionType = {
    type: string
    value?: string
}

const initialState = {
    posts: [
        {id: 1, message: 'Learn TypeScript', likeCount: 34},
        {id: 2, message: 'TypeScript no hard', likeCount: 3},
    ],
    newPostText: '',
}

export const profileReducer = (state: ProfileType = initialState, action: ActionType) => {

    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.value
            }
        case ADD_POST_IN_STATE:
            let newPost = {
                id: state.posts.length + 1,
                message: action.value,
                likeCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        default:
            return state
    }
}