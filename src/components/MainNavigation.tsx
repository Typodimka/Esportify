import React from 'react';
import {Box, FormControlLabel, Switch} from "../mui";
import {useAppDispatch, useAppSelector} from "../store/hook";
import {changeTheme} from "../store/reducers/general-reducer";



export const MainNavigation = () => {

    const {themeApp} = useAppSelector(state => state.general);
    const dispatch = useAppDispatch();
    const switchHandler = () => {
        dispatch(changeTheme(!themeApp));
    };
    return (
        <Box>

        </Box>
    );
};