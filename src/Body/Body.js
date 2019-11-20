import React, { Component, Fragment } from 'react'
import './Body.css'
class Body extends Component {
    render() { 
        return (
            <Fragment>
                <div id='container2'>
                    <div id='create'>
                        <div id='word2'>
                            Create(<span>Future</span>);
                        </div>
                        <div id='inspiration2'>
                            //以灵感 构未来
                        </div>
                    </div>
                    <div id='about2'>
                        <div id='c2-1'>
                            关于我们 <span>About us</span>
                        </div>
                        <div id='c2-2'>
                            耕耘十七载，始终为技术
                        </div>
                        <div id='c2-3'>
                        &nbsp;&nbsp;&nbsp;&nbsp;爱特工作室成立于2002年，是一个在中国海洋大学信息科学与工程学院院领导主持下，以计算机技术人才培养，网络开发为特色的技术性团体。<br></br><br></br>
                        &nbsp;&nbsp;&nbsp;&nbsp;自成立以来，爱特以发现人才、培养人才、输送人才为最终目的，现已拥有UI设计、前端开发、程序设计、Android开发、游戏设计五大类方向，数十人的技术团队。优秀的团队文化与良好的技术氛围使爱特能够脱颖而出，经过多年的发展，现已成为海大网络技术的中坚力量！
                        </div>
                    </div>
                </div>
            </Fragment>

          );
    }
}
 
export default Body;