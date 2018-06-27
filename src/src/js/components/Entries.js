import React from 'react'
import { Link } from 'react-router'
import axios from 'axios'

// Common components
import Footer from './Footer'

// List component
var EntriesList = React.createClass({
  render() {
    var entryNodes = this.props.data.map( (entry) => {
      return (
        <li key={entry.id}>
          <Link to={`/post/${entry.id}`} className="entriesList_title" dangerouslySetInnerHTML={{__html: entry.title.rendered}}/>
          <p className="entriesList_date">{entry.date}</p>
          <div className="entriesList_content" dangerouslySetInnerHTML={{__html: entry.content.rendered}}/>
        </li>
      );
    });

    return (
      <div className="mainContent">
        <ul className="entriesList">
          {entryNodes}
        </ul>
        <Footer />
      </div>
    );
  }
});

// Whole component
//var EntriesBox = React.createClass({
module.exports = React.createClass({
  displayName: 'Entries',

  getInitialState() {
    return {data: []};
  },

  loadEntriesFromServer() {
    axios.get("/wp-json/wp/v2/posts")
      .then( (response) => {
        //console.log(response);
        this.setState({data: response.data});  // renew
      }).
      catch( (response) => {
        console.log(response);
      });
  },

  componentDidMount() {
    this.loadEntriesFromServer();
  },


  render() {
    return (
      <EntriesList data={this.state.data} />
    );
  }
});



