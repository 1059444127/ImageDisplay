/**
 * Created by Tiantian on 2016/10/24.
 */
import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
// import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './css/drawer-left.css'
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

// injectTapEventPlugin();

export default class DrawerLeft extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  handleToggle_1 = () => this.setState({
    open: true
  });

  handleToggle_2 = () => this.setState({
    open: false
  });

  render() {
    const styles = {
      chevronRight: {
        position: 'absolute',
        width: '35px',
        height: '35px',
        cursor: 'pointer',
        marginTop: '23%',
        left: 0,
      },
      chevronLeft: {
        position: 'absolute',
        width: '35px',
        height: '35px',
        cursor: 'pointer',
        marginTop: '23%',
        left: '250px',
        // transiton: 'opacity 500s ease'
      },
    }

    // 方案2
    let drawerLeft;
    if (this.state.open == false) {
      drawerLeft = <ChevronRight
                     style={styles.chevronRight}
                     onTouchTap={this.handleToggle_1} />;
    } else {
      drawerLeft = <ChevronLeft
                     style={styles.chevronLeft}
                     onTouchTap={this.handleToggle_2} />;
    }

    return (
      <MuiThemeProvider>
        <div>
          {/*方案1*/}
          {/*<img*/}
            {/*src={require('./images/caret-right.png')}*/}
            {/*style={styles.chevronRight}*/}
            {/*onTouchTap={this.handleToggle_1}*/}
          {/*/>*/}
          {/*<img*/}
              {/*src={require('./images/caret-left.png')}*/}
              {/*style={styles.chevronLeft}*/}
              {/*onTouchTap={this.handleToggle_2}*/}
          {/*/>*/}

          {/*方案2*/}
          {drawerLeft}
          <Drawer open={this.state.open}>
            <MenuItem>Menu Item 1</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
          </Drawer>
        </div>
      </MuiThemeProvider>
    )
  }
}


