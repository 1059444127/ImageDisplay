import React from 'react'
// import styles from './css/footer.less'
// import "./css/footer.less"


export default class Footer extends React.Component{
  render(){
    const styles = {
      copyright: {
        display: 'block',
        position: 'absolute',
        fontFamily: 'Arial',
        background: '#333',
        left: '0',
        bottom: '0',
        width: '100%',
        height: '8%',
        lineHeight: '35px',
        textAlign: 'center',
        borderTop: '1px solid fade(#e9e9e9, 10)'
        // webkitMarginBefore: '1em',
        // webkitMarginAfter: '1em',
        // webkitMarginStart: '0px',
        // webkitMarginEnd: '0px'
      },
      link: {
        color: '#E32D91',
        textDecoration: 'none'
      }
    }

    return(
      <div style={styles.copyright}>
        <p
          dangerouslySetInnerHTML={{__html: 'Copyright © 2016 The Project by <a href=\'#\'>DeeyEye</a>. All Rights Reserved'}}>
        </p>
      </div>
    )
  }
}
