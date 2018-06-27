import React from 'react'
import { Link } from 'react-router'
import axios from 'axios'

// Common components
import Footer from './Footer'

// これもはやWPの意味ないなー
// Page component
module.exports = React.createClass({
  displayName: 'WorkCascade',

  render() {
    return (
      <div className="mainContent">
        <article className="workDetail">
          <header>
            <img src="assets/img/main_cascade.png" className="workDetail_header_image" />
            <h3 className="workDetail_title">Cascade</h3>
            <p>Installation (Model)</p>
            <p>2015</p>
          </header>

          <section className="workDetail_description_en">
            <p className="workDetail_paragraph">
              This is an advertisement which focuses on the benefit of mineral water and exercise in daily life. 
            </p>
            <p className="workDetail_paragraph">
              These days, various types of health-conscious drinks are popular but their effect is sometimes doubted.
              Meanwhile, people have many opportunities to exercise in daily life, which tends to be neglected.
            </p>
            <p className="workDetail_paragraph">
              This interactive work is projected onto a staircase in public places such as stations, and the water will lead people to the vending machine. 
              This is designed in order to resolve two issues: people’s health (by encouraging people to physically climbing up the stairs) and advertising of the products of mineral water (by inducing the audience to the vending machine).
            </p>
          </section>

          <section className="workDetail_description_jp">
            <p className="workDetail_paragraph">
              飲料水の健康性をコンセプトにプロジェクションマッピングを用いたインスタレーション広告をデザインした。
            </p>
            <p className="workDetail_paragraph">
              近年、健康志向を謳った飲料が人気だが、それらの効果には疑問の声もある。
              一方で日常生活の中には徒歩での移動など運動する機会があるにも関わらず、損失されている場面も多い。
            </p>
            <p className="workDetail_paragraph">
              そういった日常の中の小さな運動の一つである階段を上ることと身体に無害な飲料水の摂取を促進する広告を検討した。
              公共空間に設置された自動販売機から階段下まで滝の動画をプロジェクションマッピングすることで通行者にエスカレーターやエレベーターの代わりに階段の利用を促し、
              最終的に自動販売機へと誘う。
            </p>
          </section>

          <section className="workDetail_images">
            <iframe src="https://player.vimeo.com/video/262164085" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
            <img src="assets/img/cascade_wholeModel.jpg" />
          </section>

          <section className="workDetail_images">
            <img src="assets/img/cascade_sketch.jpg" />
            <img src="assets/img/cascade_conceptImage.jpg" />
            <img src="assets/img/cascade_testModel.jpg" />
          </section>

        </article>

        <Footer />
      </div>
    );
  }
});
