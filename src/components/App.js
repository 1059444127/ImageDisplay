/**
 * Created by Tiantian on 2016/10/14.
 */
import React from 'react'
import 'openseadragon'
import Footer from './Footer'
import OpenSeaDragon from './OpenSeaDragon'
import DrawerLeft from './DrawerLeft'
import DrawerRight from './DrawerRight'
import './css/app.less'
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

export default class App extends React.Component {
  render(){
    return(
      <div>
        <div><OpenSeaDragon /></div>
        <div><DrawerLeft /></div>
        <div><DrawerRight /></div>
        {/*<div><Footer /></div>*/}
      </div>
    )
  }
}


