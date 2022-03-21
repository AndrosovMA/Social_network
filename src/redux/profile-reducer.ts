import {Action, ProfileType} from "./state";

/** action_type*/
const UPDATE_NEW_POST_TEXT: string = 'UPDATE_NEW_POST_TEXT';
const ADD_POST_IN_STATE: string = 'ADD_POST_IN_STATE';

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

export const profileReducer = (action: Action, store: ProfileType) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            store.newPostText = action.value;
            return store
        case ADD_POST_IN_STATE:
            let newPost = {
                id: store.posts.length + 1,
                message: action.value,
                likeCount: 0
            }
            store.posts.push(newPost);
            store.newPostText = '';
            return store
        default:
            return store
    }
}