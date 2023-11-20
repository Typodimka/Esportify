import React from 'react';
import {Box, Button, ButtonGroup, FormControlLabel, Paper, Switch} from "../mui";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightlightIcon from '@mui/icons-material/Nightlight';
import {changeTheme, setCurrentLanguage} from "../store/reducers/general-reducer";
import {useAppDispatch, useAppSelector} from "../store/hook";

export const Header = () => {


    const {themeApp, currentLanguage} = useAppSelector(state => state.general);
    const dispatch = useAppDispatch();
    const switchHandler = () => {
        dispatch(changeTheme(!themeApp));
    }


    return (
        <Paper sx={{height: 50, pt: 1, borderRadius: 0}}>
            <ButtonGroup size="small">
                <Button variant={currentLanguage === 'russian' ? 'contained' : 'outlined'}
                        onClick={() => dispatch(setCurrentLanguage('russian'))}>RU</Button>
                <Button variant={currentLanguage === 'english' ? 'contained' : 'outlined'}
                        onClick={() => dispatch(setCurrentLanguage('english'))}>EN</Button>


            </ButtonGroup>
            <FormControlLabel
                sx={{alignItems: 'end', flexGrow: 1, ml: 'auto'}}
                control={<Switch onChange={switchHandler} checked={themeApp}/>}
                label={themeApp ? <WbSunnyIcon/> : <NightlightIcon/>}
            />

        </Paper>
    );
};