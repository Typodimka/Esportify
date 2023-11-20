import React, {useState} from 'react';
import {IconButton, Paper, Stack, Tab, TabPanel, Tabs} from "../../mui";
import {Authorization} from "./Authorization";
import {Registration} from "./Registration/Registration";


const tabs = ['Авторизация', 'Регистрация']

export const Login = () => {

    const [selectTab, setSelectTab] = useState<number>(0)

    const tabHandleChange = (event: React.SyntheticEvent, newValue: number) => {
        setSelectTab(newValue);
    };

    return (
        <Paper sx={{borderRadius: 0, maxWidth: '600px', margin: '0 auto'}}>

            <Tabs
                sx={{pb: 1, width: 350, margin: '0 auto'}}
                value={selectTab}
                onChange={tabHandleChange}
                variant="scrollable"
                scrollButtons
            >
                {tabs.map(item => (
                    <Tab label={item} key={item} wrapped/>
                ))}

            </Tabs>

            <Registration selectTab={selectTab}/>
            <Authorization selectTab={selectTab}/>


        </Paper>
    );
};