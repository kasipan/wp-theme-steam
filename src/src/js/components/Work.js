import React from 'react'
import { Link } from 'react-router'
import axios from 'axios'

// Common components
import Footer from './Footer'

// これもはやWPの意味ないなー
// Page component
module.exports = React.createClass({
  displayName: 'Work',

  render() {
    return (
      <div className="mainContent">
        <ul className="worksList">
          <li className="worksList_item">
            <Link to={`/work-edibleEnvelope`}><img src="assets/img/thumb_edible_envelope.png" /></Link>
            <h3 className="worksList_item_title"><Link to={`/work-edibleEnvelope`}>Edible Envelope</Link></h3>
            <p>Interactive System (Prototype)</p>
            <p>2017</p>
          </li>

          <li className="worksList_item">
            <Link to={`/work-methodsAndProcesses`}><img src="assets/img/thumb_methods_and_processes.jpg" /></Link>
            <h3 className="worksList_item_title"><Link to={`/work-methodsAndProcesses`}>Methods and Processes</Link></h3>
            <p>Creative Process</p>
            <p>2017</p>
          </li>
          <li className="worksList_item">
            <Link to={`/work-cascade`}><img src="assets/img/thumb_cascade.png" /></Link>
            <h3 className="worksList_item_title"><Link to={`/work-cascade`}>Cascade</Link></h3>
            <p>Installation (Model)</p>
            <p>2015</p>
          </li>

        </ul>
        <Footer />
      </div>
    );
  }
});
