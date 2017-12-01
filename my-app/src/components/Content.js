import React, { Component } from 'react';
// import Gif from './Gif';
var GphApiClient = require('giphy-js-sdk-core');
var client = GphApiClient("3U66FyvcLAFspQaiFkA0e3OOKQr5cmvS");

class Content extends Component{
  constructor(props) {
      super(props);
      this.state = {
        gifs: []
      }
  }

  componentWillMount() {
    client.trending("gifs", {})
  .then((results)=>{
    this.setState({
      gifs: results.data
    });
    console.log(this.state);
  })
  .catch(err=>console.log(err))
}

  render(){
    return(
      <div>
      <div> This is the content container.</div>
      {this.state.gifs.map((gif)=>{return(
        <div key = {gif.url}>
        <img src= {`${gif.images.original.gif_url}`} alt = ''>
        </img>
      </div>
      )
      })}
    </div>
    )
  }
}

export default Content;
