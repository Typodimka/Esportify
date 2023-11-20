import React from 'react';
import {Box} from '../mui';
import {SxProps, Theme} from '@mui/material';

interface TabPanelProps {
    children: React.ReactNode;
    index: number;
    value: number;
    sx?: SxProps<Theme>;
}

export const TabPanel = (props: TabPanelProps) => {
    const {children, value, index, sx} = props;

    return (
        <Box sx={[...(Array.isArray(sx) ? sx : [sx])]}>
            {value === index && <Box>{children}</Box>}
        </Box>
    );
};

TabPanel.defaultProps = {
    sx: [],
};
