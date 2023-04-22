
import { createMuiTheme } from "@material-ui/core/styles";


const CustomTheme =  createMuiTheme({
    direction: 'ltr',
    typography:{
        fontFamily:"IRANSans",
    },
    components: {
        MuiStack: {
          defaultProps: {
            useFlexGap: true,
          },
        },
      },
});


export default CustomTheme;