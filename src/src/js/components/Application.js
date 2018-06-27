import React from 'react'
import { Link } from 'react-router'
import axios from 'axios'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


// Root component
module.exports = React.createClass({
  displayName: 'Application',

  render() {
    return (
      <div className="pageContainer">
        <div className="header">
          <Link to="/" className="header_logo">shodai.ws</Link>
          <ul className="headerNav">
            <li className="headerNav_item"><Link to="/about">about</Link></li>
            <li className="headerNav_item inactive">blog</li>
            <li className="headerNav_item"><Link to="/work">work</Link></li>
          </ul>
        </div>


        <ReactCSSTransitionGroup
          component="div"
          transitionName="transition"
          transitionEnterTimeout={2000}
          transitionLeaveTimeout={750}
          
          transitionAppear={true}
          transitionAppearTimeout={2000}
        >
          {React.cloneElement(this.props.children, {
            key: this.props.location.pathname
          })}
        </ReactCSSTransitionGroup>
      </div>
    );
  }

});