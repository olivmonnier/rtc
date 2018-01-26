import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import { Tabs, Tab } from 'material-ui/Tabs'
import Content from './Content.jsx'
import TitleBar from './TitleBar.jsx'
import Settings from './Settings.jsx'
import { TAB_CONTENT, TAB_SETTINGS } from '../Constants'

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

    return (
      <Paper rounded={false}>
        <TitleBar/>
        <Tabs 
          value={ states.activeTab }
          onChange={actions.setActiveTab}>
          <Tab
            value={TAB_CONTENT}
            label="CONTENT"/>
          <Tab
            value={TAB_SETTINGS}
            label="SETTINGS"/>
        </Tabs>
        <div>
          { states.activeTab === TAB_CONTENT
              ? <Content {...this.props}/>
              : <Settings {...this.props}/>
          }
        </div>
      </Paper>
    )
  }
}

export default Main