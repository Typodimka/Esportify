import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {saveTheme} from "../../utils/localData";
import {MESSAGES_FOR_SNACK_BAR} from "../../enums";

type SnackBarType = 'error' | 'warning' | 'success';

interface IUser {
    userType: 'judge' | 'captain' | 'participant' | '';
    login: string;
    email: string;
}
type SliceState ={
    currentLanguage: string;
    user:IUser | null;
    language: Record<string, string>;
    themeApp: boolean;

    appMessage: string;
    isShowSnackBar: boolean;
    snackBarType: SnackBarType;

}


const initialState: SliceState = {
    currentLanguage: 'english',
    user: null,
    language: {},
    themeApp: true,

    appMessage: '' as MESSAGES_FOR_SNACK_BAR,
    isShowSnackBar: false,
    snackBarType: 'success',

};

export const slice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        setCurrentLanguage: (state, action: PayloadAction<string>) => {
            state.currentLanguage = action.payload;
        },
        changeTheme(state: SliceState, action: PayloadAction<boolean>) {
            state.themeApp = action.payload;
            saveTheme(action.payload);
        },

        setAppMassage(
            state: SliceState,
            action: PayloadAction<{ type: SnackBarType; message: MESSAGES_FOR_SNACK_BAR | string }>,
        ) {
            const { type, message } = action.payload;
            state.isShowSnackBar = true;
            state.snackBarType = type;
            state.appMessage = message;
        },


    },
});

export const generalReducer = slice.reducer;

export const {
    setCurrentLanguage,
    changeTheme,
    setAppMassage
} = slice.actions;

export type GeneralActionsType =
    | ReturnType<typeof setCurrentLanguage>
    | ReturnType<typeof changeTheme>
    | ReturnType<typeof setAppMassage>



