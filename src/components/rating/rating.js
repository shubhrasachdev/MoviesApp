import React from 'react';
import "./rating.css";

class Rating extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() { // initial rendering, and re-rendering on any state changes
        let stars = [];
        for(let i = 0; i < this.props.rating; i++) stars.push(<div className="clip-star filled-star"/>);
        for(let i = this.props.rating; i < 5; i++) stars.push(<div className="clip-star empty-star"/>);
        return(
            <div className="rating-col">
                {stars}
            </div>
        );
    }
}

export default Rating;