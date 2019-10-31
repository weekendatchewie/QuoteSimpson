import React from 'react';
import QuoteSimpson from './components/Quote';
import axios from 'axios' ;

import './App.css';

const sampleQuote = {
  quote: "Yeah. Call this an unfair generalization if you must.. but old people are no good at everything",
  character: "Moe Szyslak",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMoeSzyslak.png?1497567512411",
  characterDirection: "Right"
  };


  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state= {
        quote: sampleQuote
      };
      this.getQuote = this.getQuote.bind(this);
    }

    getQuote() {
      // Send the request
      axios.get('https://quests.wilders.dev/simpsons-quotes/quotes')
        // Extract the DATA from the received response
        .then(response => response.data)
        // Use this data to update the state
        .then(data => {
          this.setState({
            quote: data[0],
          });
      });
    }


  render () {
  return (
    <div className="App">
      <header className="App-header">
     
    <QuoteSimpson props={this.state.quote}/>
    <button onClick={this.getQuote}> Get Quote </button>


      </header>
    </div>
  );
} }



export default App;