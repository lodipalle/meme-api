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

  showModalActive = (item) => {
    this.setState( {
      showModal: true,
      item: item
    })
  }

  hideModal = () => {
    this.setState({
      showModal: false
    })
  }

  showViewModalActive = () => {
    this.hideModal()
    this.setState({
      showViewModal: true,
    })
  }

  hideViewModal = () => {
    this.setState({
      showViewModal: false,
      item: {}
    })
  }


  render() {
    var {isLoaded, items} = this.state;
    if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
    }
    return (
        <>
            <div className="App">
                <div class="row">

                    {
                        items !== undefined ?
                            (

                                items.map((item) => {
                                    return (
                                        <div class="col-4" key={item.id}>
                                            <div class="card" style={styles}>
                                              <a href="#"   onClick={() => this.showModalActive(item)}>
                                                <Image type={"link"} src={item.url}
                                                       class="card-img-top" alt="..."
                                                       style={imagelength}
                                                />
                                              </a>
                                                <div class="card-body">
                                                    <h5 class="card-title">{item.name}</h5>
                                                </div>
                                            </div>

                                        </div>
                                    )

                                })
                            ) : ('')
                    }


                </div>
            </div>

            {this.state?.showModal ?
                <DetailModal
                    item={this.state.item}
                    showDetailModal={this.state.showModal}
                    handleClose={this.hideModal}
                    handleViewShow={this.showViewModalActive}
                /> : ''}

            {this.state?.showViewModal ?
                <ViewModal
                    item={this.state.item}
                    showViewDetailModal={this.state.showViewModal}
                    handleClose={this.hideViewModal}
                    handleViewShow={this.handleViewShow}
                /> : ''}


        </>
    );
}
}

export default App;