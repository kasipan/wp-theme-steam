import React from 'react'
import { Link } from 'react-router'
import axios from 'axios'

// Common components
import Footer from './Footer'


// Page component
module.exports = React.createClass({
  displayName: 'Single',

  getInitialState() {
    return {
      loadingFlag: false,
      entry: null
    };
  },

  loadPageFromServer(postId) {
    axios.get("/wp-json/wp/v2/posts/" + postId)
      .then( (response) => {
        console.log(response);
        this.setState({
          loadingFlag: true, 
          entry: response.data
        });
      }).
      catch( (response) => {
        console.log(response);
      });
  },

  componentDidMount() {
    this.loadPageFromServer(this.props.params.postId);
  },

  render() {
    // var content = null;   // if loading hasn't finished yet, this render would return null

    // if(this.state.loadingFlag){
    //   content = (
    //     <SinglePageContent data={this.state.entry} flag={this.state.loadingFlag} />
    //   );
    // }
    
    // return content;

    return (
      <div className="mainContent">
        {this.state.loadingFlag ? <SinglePageContent data={this.state.entry} /> : ''}
        <Footer />
      </div>
    );
  }
});



var SinglePageContent = React.createClass({
  render() {
    return (
      <div>
        <p>{this.props.data.id ? this.props.data.id : ''}</p>
        <p>{this.props.data.title.rendered ? this.props.data.title.rendered : ''}</p>
        <div dangerouslySetInnerHTML={{__html: this.props.data.content.rendered ? this.props.data.content.rendered : ''}}/>
      </div>
    );
  }
});



