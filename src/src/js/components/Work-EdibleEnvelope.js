import React from 'react'
import { Link } from 'react-router'
import axios from 'axios'

// Common components
import Footer from './Footer'

// これもはやWPの意味ないなー
// Page component
module.exports = React.createClass({
  displayName: 'WorkEdibleEnvelope',

  render() {
    return (
      <div className="mainContent">
        <article className="workDetail">
          <header>
            <img src="assets/img/main_edible_envelope.jpg" className="workDetail_header_image" />
            <h3 className="workDetail_title">Edible Envelope</h3>
            <p>Interactive System (Prototype)</p>
            <p>2017</p>
          </header>

          <section className="workDetail_description_en">
            <p className="workDetail_paragraph">
              Sometimes the latest technology like artificial intelligence is associated with human creativity.
              In this class project 'Pathway Project', I thus attempted to improve individual creativity thorough cooking which is considered as one of the fundamental creation in everyday life.
            </p>
            <p className="workDetail_paragraph">
              Finally, I designed an interactive system for international students and their families. 
              In this system which has an image recognition function, the students can communicate with their families by cooking food shaped like an envelope. 
              This design challenges to motivate the students to cook and also to encourage communication with their families.
            </p>
          </section>

          <section className="workDetail_description_jp">
            <p className="workDetail_paragraph">
              時折、技術力の発展は人の創造性の真価を問うようになりつつある。<br />
              本プロジェクト（Pathway Project）において、個人に身近な創作的行為である料理を促進することで創造性を向上させられないか考えた。
            </p>
            <p className="workDetail_paragraph">
              最終的に、留学生及びその家族が料理を通してコミュニケーションできるインタラクティブシステムをデザインし、そのプロトタイプを制作した。
              本システムでは学生が封筒型の料理を自身で調理しその料理をウェブカメラに認識させることをトリガーに、離れている家族とコミュニケーションを取ることができる。
              これにより学生側ユーザーの料理する事に対するモチベーション維持を図った。
            </p>
          </section>

          <section className="workDetail_images">
            <iframe src="https://player.vimeo.com/video/217697778" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
            <img src="assets/img/edibleEnvelope_overview.jpg" />
            <img src="assets/img/edibleEnvelope_closeup.jpg" />
          </section>

          <section className="workDetail_imagesSub">
            <img src="assets/img/edibleEnvelope_usageProcess.jpg" />
            <img src="assets/img/edibleEnvelope_prototype.gif" />
          </section>
        </article>

        <Footer />
      </div>
    );
  }
});
