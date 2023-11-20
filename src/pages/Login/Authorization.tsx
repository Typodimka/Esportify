import React, { useState } from 'react';
import { TabPanel } from "../../components/TabPanel";
import { Box, Button, FormControl, Snackbar } from "../../mui";
import { TextInput } from "../../components/TextInput";
import { useAppDispatch } from "../../store/hook";
import { MESSAGES_FOR_SNACK_BAR } from "../../enums";

const stylePaper = {
    p: 2,
    width: 250,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
    pb: 5
};

interface AuthorizationType {
    selectTab: number
}

const users = [{ email: 'index@mail.ru', password: '1' }];

export const Authorization: React.FC<AuthorizationType> = ({ selectTab }) => {
    const dispatch = useAppDispatch();
    const [helperText, setHelperText] = useState<string[]>(['', '']);
    const [settings, setSettings] = useState({
        email: '',
        password: ''
    });
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const onBlurEmail = (value: string) => {
        const copyHelperText = [...helperText];
        copyHelperText[0] = '';
        setHelperText(copyHelperText);
        setSettings(prevSettings => ({ ...prevSettings, email: value }));
    };

    const onBlurPassword = (value: string) => {
        const copyHelperText = [...helperText];
        copyHelperText[1] = '';
        setHelperText(copyHelperText);
        setSettings(prevSettings => ({ ...prevSettings, password: value }));
    };

    const handleClick = () => {
        const copyHelperText = [...helperText];
        if (settings.email === '') {
            copyHelperText[0] = 'Обязательное поле';
        } else if (!settings.email.includes('@')) {
            copyHelperText[0] = 'Отсутствует символ "@"';
        }

        if (settings.password === '') {
            copyHelperText[1] = 'Обязательное поле';
        }
        setHelperText(copyHelperText);

        if (settings.email !== '' && settings.email.includes('@') && settings.password !== '') {
            if (!users.some(item => item.email === settings.email && item.password === settings.password)) {
                setSnackbarOpen(true);
            }
        }
    }

    const handleCloseSnackbar = () => {
        setSnackbarOpen(false);
    }

    return (
        <TabPanel value={selectTab} index={0}>
            <Box sx={stylePaper}>
                <FormControl sx={{ marginTop: 2, width: '250px' }}>
                    <TextInput
                        value={settings.email}
                        label='Адрес почты'
                        helper={helperText[0]}
                        onBlurHandler={value => onBlurEmail(value.toString())}
                    />
                </FormControl>

                <FormControl sx={{ marginTop: 2, width: '250px' }}>
                    <TextInput
                        type="password"
                        value={settings.password}
                        label='Пароль'
                        helper={helperText[1]}
                        onBlurHandler={value => onBlurPassword(value.toString())}
                    />
                </FormControl>

                <Button variant='outlined' sx={{ mt: 5 }} onClick={handleClick}>Авторизация</Button>

                <Snackbar
                    open={snackbarOpen}
                    autoHideDuration={2000}
                    onClose={handleCloseSnackbar}
                    message={MESSAGES_FOR_SNACK_BAR.WRONG_LOGIN_OR_PASSWORD}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    ContentProps={{
                        style: {
                            color: 'white',
                            backgroundColor: 'red',
                        },
                    }}
                />
            </Box>
        </TabPanel>
    );
};
