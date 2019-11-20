import React, { Component, Fragment } from 'react'
import './Header.css'
class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: ['部门', '成员', '历史', '作品', '留言']
        }
    }
    render() { 
        return (
            <Fragment>
                <div id='container1'>
                    <div id='container1-1'>
                      ITStudio
                    </div>
                    <div id='container1-2'>
                      爱特工作室
                    </div>
                    <ul id='container1-3'> 
                    {
                      this.state.list.map((item,index)=>{
                return<li  key={index+item}>{item}</li>})
                }
               </ul>
               <span>加入</span>
                </div>
            </Fragment>

          );
    }
}
 
export default Header;