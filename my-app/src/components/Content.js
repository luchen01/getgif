import React, { Component } from 'react';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import Gif from './Gif';
var GphApiClient = require('giphy-js-sdk-core');
var client = GphApiClient("3U66FyvcLAFspQaiFkA0e3OOKQr5cmvS");

class Content extends Component{
  constructor(props) {
      super(props);
      this.state = {
        gifs: [],
        search: '',
        requestSent: false
      }
  }

  componentDidMount() {
    client.trending("gifs", {"limit": 10})
  .then((results)=>{
      this.setState({
      gifs: results.data
    })
    console.log('did mount', this.state);
    return this.state;
  })
  .then((data)=>{
    window.addEventListener('scroll', this.handleOnScroll);
    console.log('done');
  })
  .catch(err=>console.log(err));
}

  componentWillUnmount() {
  window.removeEventListener('scroll', this.handleOnScroll);
}

  querySearchResult(){
    if(this.state.requestSent){
      return;
    }
    console.log('inside querySearch');
    setTimeout(this.doQuery(), 2000);
    this.setState({requestSent: true});
  }

  doQuery(){
    client.trending("gifs", {"limit": 20})
    .then((responses)=>{
      console.log('responses', responses.data);
      this.setState({
        gifs: responses.data
      })
      this.setState({requestSent: false})
    })
    .catch(err=>console.log(err))
  }

  handleOnScroll(){
    console.log('documentelement', document.documentElement);
    console.log('document scroll top', document.documentElement.scrollTop);
    console.log('document scroll height', document.documentElement.scrollHeight);
    console.log('client height', document.documentElement.clientHeight);
    var scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    var scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
    var clientHeight = document.documentElement.clientHeight || window.innerHeight;
    var scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
    console.log('scrolledtobottom', scrolledToBottom)
    if(scrolledToBottom){
      this.querySearchResult();
    }
  }

handleChange(event) {
  this.setState({ search: event.target.value });
}

handleSubmit() {
  client.search('gifs', {"q": `${this.state.search}`, "limit": 10})
  .then((results)=>{
    this.setState({
      gifs: results.data
    });
    console.log(results.data);
  })
  .catch(err=>console.log(err))
}

  render(){
    return(
      <div>
        <div>
          <input
            type="text"
            placeholder="Search Gif"
            onChange={(event) => this.handleChange(event)}
            value={this.state.search}
          />
          <button onClick={() => this.handleSubmit()}>Search</button>
        </div><br/>
      {this.state.gifs.map((gif)=>{return(
        <div key = {gif.url}>
        <img src= {`${gif.images.original.gif_url}`} alt = ''>
        </img>
      </div>
      )
      })}
      {/* {(()=>{
        if(this.state.requestSent){
          return(
            <div className = "data-loading">
              <i className = "fa fa-refresh fa-spin"></i>
            </div>
          )
        } else {
          return(
            <div className = "data-loading"></div>
          )
        }
      })()
      } */}
    </div>
    )
  }
}

export default Content;
