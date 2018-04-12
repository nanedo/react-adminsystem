import React from 'react'

import './index.scss'

class TopNav extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      current: 'mail',
      username: 'nanedo'
    }
  }

  handleClick (e) {
    this.setState({
      current: e.key,
    });
  }

  handleDropDownClick (e) {

  }

  onCollapseSideBar () {
    if(window.innerWidth < 767){
      // 小屏幕的判断
      document.body.classList.toggle('sidebar-open')
    } else {
      document.body.classList.toggle('sidebar-collapse')
    }
    
  }

  render () {
    return (
      <header className="main-header">
        {/* <!-- Logo --> */}
        <a href="../../index2.html" className="logo">
          {/* <!-- mini logo for sidebar mini 50x50 pixels --> */}
          <span className="logo-mini"><b>N</b>a</span>
          {/* <!-- logo for regular state and mobile devices --> */}
          <span className="logo-lg"><b>Na</b>nedo</span>
        </a>
        {/* <!-- Header Navbar: style can be found in header.less --> */}
        <nav className="navbar navbar-static-top">
          {/* <!-- Sidebar toggle button--> */}
          <a href="#" className="sidebar-toggle" onClick={this.onCollapseSideBar.bind(this)} data-toggle="push-menu" role="button">
          </a>

          <div className="navbar-custom-menu">
          <ul className="nav navbar-nav">
            <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">欢迎您，{this.state.username} <span className="caret"></span></a>
                <ul className="dropdown-menu" role="menu">
                  <li><a href="#">设置</a></li>
                  <li className="divider"></li>
                  <li><a href="#">退出</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}

export default TopNav