import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import { Tabs, Tab } from 'material-ui/Tabs'
import Preview from './Preview.jsx'
import TitleBar from './TitleBar.jsx'
import Settings from './Settings.jsx'
import { TAB_PREVIEW, TAB_SETTINGS } from '../Constants'

class Main extends Component {
  onTabNav(tab) {
    const { actions } = this.props

    return () => {
      actions.setActiveTab(tab)
    }
  }
  render() {
    console.log(this.props)
    const { states, actions } = this.props
    const { activeTab } = states.appState

    return (
      <Paper rounded={false} style={{ height: '100%' }}>
        <TitleBar/>
        <Tabs 
          value={ activeTab }
          onChange={actions.setActiveTab}>
          <Tab
            value={TAB_PREVIEW}
            label="PREVIEW"/>
          <Tab
            value={TAB_SETTINGS}
            label="SETTINGS"/>
        </Tabs>
        <div>
          { activeTab === TAB_PREVIEW
              ? <Preview {...this.props}/>
              : <Settings {...this.props}/>
          }
        </div>
      </Paper>
    )
  }
}

export default Main