import { createTheme } from '@mui/material/styles';
import { themeTypography } from './typography'
import { customComponent } from "./component";

const themeObj = {

}
const theme = createTheme({
    typography: themeTypography(themeObj),
    palette:{
        primary:{
            main: "#01C2A9"
        }
    },
    transitions: {
        duration: {
            shortest: 150,
            shorter: 200,
            short: 250,
            // most basic recommended timing
            standard: 300,
            // this is to be used in complex animations
            complex: 375,
            // recommended when something is entering screen
            enteringScreen: 225,
            // recommended when something is leaving screen
            leavingScreen: 195,
        },
    },
    components: customComponent(themeObj)
});

export default theme;