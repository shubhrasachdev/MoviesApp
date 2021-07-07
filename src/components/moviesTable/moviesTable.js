import React from 'react';
import "./moviesTable.css";
import MoviesTableRow from '../moviesTableRow/moviesTableRow';

class MoviesTable extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let data = this.props.data;
        let header = {
            sno: "S. No.",
            name: "Movie Name",
            genre: "Genre",
            rating: "Rating"
        }
        let rows = [];
        for(let movie of data){
            rows.push(<MoviesTableRow key={movie.sno} data={movie}/>);
        }
        return (
            <div className="movies-table">
                <MoviesTableRow data={header} header="true"/>
                {rows}
            </div>
        );
    }
} 

export default MoviesTable;