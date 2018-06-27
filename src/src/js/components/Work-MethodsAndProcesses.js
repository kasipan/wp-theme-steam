import React from 'react'
import { Link } from 'react-router'
import axios from 'axios'

// Common components
import Footer from './Footer'

// これもはやWPの意味ないなー
// Page component
module.exports = React.createClass({
  displayName: 'WorkMethodsAndProcesses',

  render() {
    return (
      <div className="mainContent">
        <article className="workDetail">
          <header>
            <img src="assets/img/main_methods_and_processes.jpg" className="workDetail_header_image" />
            <h3 className="workDetail_title">Methods and Processes</h3>
            <p>Creative Process</p>
            <p>2017</p>
          </header>

          <section className="workDetail_description_en">
            <p className="workDetail_paragraph">
              This project 'Methods and Processes' aimed to design my own cerative process throgh designing an intervention in the issue which I chose. 
              The subject for me was fuel poverty which is one of the fundamental issues connecting various factors such as well-being, education and economy.
            </p>
            <p className="workDetail_paragraph">
              The primary and secondary research included some methods like interview, observation, bodystorming and improving my own electrical consumption. 
              Through these practices, I conceived that modern lifestyle seeems to encourage the lack of awareness of limited energy. 
              Subsequently, I tried to experiment by using one conceptual idea in order to collect user data. In addition, I refined this idea for making aware of the limit of the resources effectively. 
            </p>
            <p className="workDetail_paragraph">
              Finally, I designed a diagram like a light bulb to depict the total process of this project as my own design framework.
            </p>
          </section>

          <section className="workDetail_description_jp">
            <p className="workDetail_paragraph">
              デザインプロセスそのものを設計することを目的としたプロジェクト Methods and Processes にて、
              先進国においてエネルギーコストが増加することによって拡大している燃料貧困（Fuel Poverty）をテーマに解決案を提案しながら、
              その思考プロセスの体系化を図った。
            </p>
            <p className="workDetail_paragraph">
              インタビューや自身の電力消費行動を記録するなどの一次調査（Primary Research）及び二次調査（Secondary Research）を通して、
              現代のライフスタイルがエネルギー資源の有限性の認識度を下げているのではないかと考えた。
              そこから、消費者と電気のタッチポイントであるコンセントを使ったラフプロトタイプを複数作り、それを使った実験を大学構内で行った。
              その結果を分析し、より機能的なアイデアをブラッシュアップした。
            </p>
            <p className="workDetail_paragraph">
              最終的にこれらのデザインプロセスをステップに分け、電球をモチーフにダイアグラム化した。
            </p>
          </section>

          <section className="workDetail_images">
            <img src="assets/img/methodsAndProcesses_processesDiagram.png" />
            <img src="assets/img/methodsAndProcesses_prototype_receipt_02.jpg" />
          </section>

          <section className="workDetail_imagesSub">
            <img src="assets/img/methodsAndProcesses_prototype_clockwork.jpg" />
            <img src="assets/img/methodsAndProcesses_prototype_receipt_01.jpg"  />
            <img src="assets/imf/methodsAndProcesses_experiment.jpg" />
          </section>
        </article>

        <Footer />
      </div>
    );
  }
});
