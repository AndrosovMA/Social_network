import {createStore, combineReducers} from 'redux'
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

/** Types*/
export type StoreType = typeof store;

const reducers = combineReducers({
    profileReducer,
    dialogsReducer
});
export const store = createStore(reducers);

