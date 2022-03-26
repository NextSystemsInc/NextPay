import './Card.css';
// import props from a NON deprecated one
import React, {Component} from 'react';
class Card extends Component {
    render() {
        return (
            <div className="App-card">
                <div className="App-card-content">
                <h1>
                    <b>{this.props.title}</b>
                </h1>
                </div>
                <div className="App-card-image">
                    <img src={this.props.cardimg} alt="bitmap1" className="App-card-image-content" />
                </div>
            </div>
        )
    }
}
export default Card;