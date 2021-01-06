import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json.item,
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
                  <li key={item.meme.id}>
                    Name: {item.meme.name}
                    Item: {item.meme.url}
                    Width: {item.meme.width}
                    Height: {item.meme.height}
                    Box Count: {item.meme.box_count}
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