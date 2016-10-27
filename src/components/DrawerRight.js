/**
 * Created by Tiantian on 2016/10/24.
 */
import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './css/drawer-left.css'
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';

export default class DrawerRight extends React.Component {

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
        // left: '250px',
        right: 0
      },
      chevronLeft: {
        position: 'absolute',
        width: '35px',
        height: '35px',
        cursor: 'pointer',
        marginTop: '23%',
        // left: 0,
        right: '250px'
      },
    }

    let drawerRight;
    if (this.state.open == false) {
      drawerRight = <ChevronLeft
        style={styles.chevronRight}
        onTouchTap={this.handleToggle_1} />;
    } else {
      drawerRight = <ChevronRight
        style={styles.chevronLeft}
        onTouchTap={this.handleToggle_2} />;
    }

    return (
      <MuiThemeProvider>
        <div>
          {drawerRight}
          <Drawer open={this.state.open} openSecondary={true}>
            <MenuItem>Menu Item 1</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
          </Drawer>
        </div>
      </MuiThemeProvider>
    )
  }
}


