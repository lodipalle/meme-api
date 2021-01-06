import React, { Component } from 'react';
import DetailModal from "./DetailModal";
import ViewModal from "./ViewModal";
import Image from "react-bootstrap/Image";

const styles = {
  color: "red",
  margin: "5px",
  padding: "5px"
};

const imageLength = {
  width: "180%",
  height: "280px"
};


class App extends React.Component {
  state = {
    items: [],
    isLoaded: false,
    showModal: false,
    showViewModal: false,
    item: {}
  }

  componentDidMount() {
    fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(json => {
        console.log(json.data.memes)
        this.setState({
          isLoaded: true,
          items: json.data.memes,
        })
      });
  }

  

  render() {
    var { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    else { }
    return (
      <div className="App">
        <ul>
          {
            items !== undefined ?
              (
                items.map()(item => {
                  <li key={item.id}>
                    Name: {item.name}
                    Item: {item.url}
                    Width: {item.width}
                    Height: {item.height}
                    Box Count: {item.box_count}
                  </li>
                })
              ) : ('')
          }
        </ul>
      </div>
    );
  }
}

export default App;