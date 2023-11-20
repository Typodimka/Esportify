import React, {useState} from 'react';
import {Box, FormControl, FormHelperText} from "../../../mui";
import {TabPanel} from "../../../components/TabPanel";
import {MySelect} from "../../../components/MySelect";
import {MyInputLabel} from "../../../components/MyInputLabel";
import {Simulate} from "react-dom/test-utils";
import copy = Simulate.copy;

interface RegistrationType {
    selectTab: number
}

const optionsTypeUser = ['Судья', 'Капитан', 'Участник']
const optionsSpecialisation =['Главный судья соревнований' , 'Секретарь соревнований', 'Матчевый судья']

const listTitle = [
    'Тип пользователя'
];

const stylePaper = {
    p: 2,
    width: 250,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto'
};

const settingsJudge = {
    name: '',
    specialisation: 'Матчевый судья',
    category: 0,
    country: 'Россия',
    dateOfBirth: null,
    city: 'Moscow',
    email: '',
    password: ''
}

const settingsParticipant = {
    name: '',
    floor: 'Муж',
    team: '',
    dateOfBirth: null,
    city: 'Moscow',
    email: '',
    password: ''

}


export const Registration: React.FC<RegistrationType> = ({ selectTab }) => {

    const [typeUser, setTypeUser] = useState('')

    const [settingsUser, setSettingsUser] = useState(settingsParticipant)

    const [helperText, setHelperText] = useState<string[]>(Array(6).fill(''));
    const [values, setValues] = useState(['Участник'])

    const setSelect = (event: string) => {
        setTypeUser(event)
    }

    return (
        <TabPanel value={selectTab} index={1} >
                <Box sx={stylePaper}>

                    <FormControl
                        sx={{ width: '250px'}}
                        variant="standard"
                    >
                        <MyInputLabel title='Тип пользователя'/>
                        <MySelect
                            options={optionsTypeUser}
                            value={typeUser}
                            onChangeOption={setSelect}
                        />

                    </FormControl>

                    {typeUser === 'Судья' && (
                        <FormControl
                            sx={{ width: '250px'}}
                            variant="standard"
                            error={helperText[2] !== ''}
                        >
                            <MyInputLabel title={listTitle[0]}/>
                            <MySelect
                                options={optionsSpecialisation}
                                value={values[0]}
                                onChangeOption={setSelect}
                            />

                        </FormControl>
                    )}


                </Box>

        </TabPanel>
    );
};
