
import { createTheme } from "@material-ui/core/styles";


const CustomTheme =  createTheme({
    direction: 'ltr',
    typography:{
        fontFamily:"IRANSans",
        fontSize: 12,
    },
    components: {
        MuiStack: {
          defaultProps: {
            useFlexGap: true,
          },
        },
      },
});

CustomTheme.typography.h2 = {
  fontSize: '1.5rem!important',
  fontWeight: "600!important",
  color:"red",
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
};

export default CustomTheme;