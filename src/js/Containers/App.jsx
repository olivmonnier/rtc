import React, { Component } from 'react'
import { deepOrange500 } from "material-ui/styles/colors"
import getMuiTheme from "material-ui/styles/getMuiTheme"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Main from '../Components/Main.jsx'

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500
  }
})

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Main/>
      </MuiThemeProvider>
    )
  }
}

export default App