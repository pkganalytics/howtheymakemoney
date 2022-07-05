import { createTheme } from '@mui/material/styles';
import { teal } from '@mui/material/colors';

const customTheme = createTheme({
		palette: {
			primary: {
				main: teal[500]
				},
			secondary: {
				main: "#FFF"
				 },
  },
 typography: {
    h4: {
		color: teal[500],
		fontWeight: 'bold'
    }

  } });

export default customTheme;
