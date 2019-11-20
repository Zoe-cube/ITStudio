import React, { Component, Fragment } from 'react'
import './Footer.css'
class Footer extends Component {
    render() { 
        return (
            <Fragment>
                <div id='footer'>
                    <header>ITStudio<span> · Contribute the Future</span></header>
                    
                    <div id='containerfooter'>
                        <p id='lu'>鲁ICP备XXXXXXXXX号</p>
                        <p>山东省青岛市<br></br> 中国海洋大学<br></br> 信息科学与工程学院北楼B505<br></br><br></br> © 2019 ITStudio All Right Reserved. </p>
                    </div>
                </div>
            </Fragment>

          );
    }
}
 
export default Footer;