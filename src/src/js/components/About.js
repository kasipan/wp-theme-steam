import React from 'react'
import { Link } from 'react-router'
import axios from 'axios'

// Common components
import Footer from './Footer'


// About component
module.exports = React.createClass({
  displayName: 'About',

  render() {
    return (
      <div className="mainContent">
        <p className="aboutName">Shodai Kayama / カヤマ ショウダイ</p>
        
        <p className="aboutProfile">
          A designer who has the backgroud to work for Japanese startup companies.
          In order to create novel values in everyday life, 
          he focuses on making alternative experiences beyond the boundary of materiality and immateriality, 
          especially by using the Internet resource.
        </p>

        <p className="aboutProfile">
          技術の応用先をデザインすることで、新たな価値を生み出すことを目的とする。<br />
          モノ・コトが持つ物質性／非物質性に縛られず、主にインターネットと繋がったリソースを用いて新たな経験を設計する。
        </p>

        <Footer />
      </div>
    );
  }
});