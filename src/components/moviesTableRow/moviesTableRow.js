import React from "react";
import "./moviesTableRow.css";
import Rating from "../rating/rating";

class MoviesTableRow extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        let {sno, name, genre, rating} = this.props.data;
        let ratingContent = this.props.header ? rating : [];
        if(!this.props.header){
            for(let i = 0; i < rating; i++) ratingContent.push(<div class="clip-star filled-star"/>);
            for(let i = rating; i < 5; i++) ratingContent.push(<div class="clip-star empty-star"/>);
        }
        return (
            <div className={"" + (this.props.header ? 'movies-table-row header' : 'movies-table-row')}>
                <div className="col col-sm serial-number">{sno}</div>
                <div className="col col-lg movie-name">{name}</div>
                <div className="col col-md genre">{genre}</div>
                <div className="col col-md rating">{this.props.header ? rating: <Rating rating={rating}/>}</div>
            </div>
        );

    }
    
}

export default MoviesTableRow;