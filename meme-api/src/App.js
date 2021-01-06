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