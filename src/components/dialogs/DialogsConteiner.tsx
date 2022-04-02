/** Components*/
import {addMessageInStateActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";

/** Types*/
import React, {FC} from "react";
import {Dialogs} from "./Dialogs";
import {StoreType} from "../../redux/redux-store";


type propsType = {
    store: StoreType
}

const DialogsContainer: FC<propsType> = ({store}) => {
    const addNewMessage = () => {
        store.dispatch(addMessageInStateActionCreator())
    }
    const onChangeTextTextarea = (value: string) => {
        store.dispatch(updateNewMessageTextActionCreator(value))
    }

    return (
        <Dialogs dialogs={store.getState().dialogsReducer}
                 addNewMessage={addNewMessage}
                 onChangeTextTextarea={onChangeTextTextarea}/>
    )
}

export {DialogsContainer};


