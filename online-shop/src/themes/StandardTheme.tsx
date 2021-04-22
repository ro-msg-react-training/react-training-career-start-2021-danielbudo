import { createMuiTheme } from '@material-ui/core';

const StandardTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#ffffff',
        },
        secondary: {
            main: '#004E93',
        }
    },
    typography: {
        fontFamily: ['Oswald',
        'Sans-Serif'
        ].join(','),
        
    }
});
export default StandardTheme;