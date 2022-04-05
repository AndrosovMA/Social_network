import {createStore, combineReducers} from 'redux'
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {userReducer} from "./users-reducer";

/** Types*/
export type StoreType = typeof store;
export type StateType = typeof state;
export type DispatchType = typeof dispatch;



const reducers = combineReducers({
    profileReducer,
    dialogsReducer,
    userReducer
});
export const store = createStore(reducers);

const state = store.getState();
const dispatch = store.dispatch;