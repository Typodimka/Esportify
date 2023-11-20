import React from 'react';
import {useAppSelector} from "./store/hook";
import {createTheme, ThemeProvider} from "@mui/material";
import {orange} from "@mui/material/colors";
import {Box, Button, Grid} from "./mui";
import {Header} from "./components/Header";
import {Login} from "./pages/Login/Login";


function App() {
    const {themeApp} = useAppSelector(state => state.general);
    const theme = createTheme({
        palette: {
            mode: themeApp ? 'dark' : 'light',
            primary: {
                main: orange[500],
            },
            background: {
                default: themeApp ? '#212121' : '#fff',
                paper: themeApp ? '#212121' : '#fff',
            },
        },
    });

    const bgColor = themeApp ? '#2f2f2f' : '#eaeef4';


    return (

        <ThemeProvider theme={theme}>
            <Box sx={{height: '100vh', bgcolor: bgColor}} >
                <Header />
                <Login />
            </Box>
        </ThemeProvider>


    );
}

export default App;
