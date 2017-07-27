import mui from 'material-ui'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {teal200,teal500,teal700,orangeA400} from 'material-ui/styles/colors'


const green        = '#00AA86'
const red          = '#D32F2F'
const darkRed      = '#C1272D'
const white        = '#ffffff'
const black        = '#000000'
const darkGrey     = '#757575'
const grey         = '#DEDEDE'
const grey50       = 'rgba(222, 222, 222, 0.5)'
const grey30       = 'rgba(222, 222, 222, 0.7)'

export const palette = {
  primary1Color: teal500,
  primary2Color: teal200,
  primary3Color: teal700,
  accent1Color: orangeA400,
  textColor: black,
  alternateTextColor: white,
  canvasColor: white,
  borderColor: grey,
  disabledColor: grey30,
  pickerHeaderColor: orangeA400,

}

export default getMuiTheme({ palette })
