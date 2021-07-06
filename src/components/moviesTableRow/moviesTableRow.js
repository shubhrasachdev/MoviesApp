import React from "react";
import "./moviesTableRow.css";

class MoviesTableRow extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        let {sno, name, genre, rating} = this.props.data;
        return (
            <div className={"" + (this.props.header ? 'movies-table-row header' : 'movies-table-row')}>
                <div className="col serial-number">{sno}</div>
                <div className="col movie-name">{name}</div>
                <div className="col genre">{genre}</div>
                <div className="col rating">{rating}</div>
            </div>
        );

    }
    
}

export default MoviesTableRow;