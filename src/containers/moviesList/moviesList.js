import React from 'react';
import "./moviesList.css";
import NavBar from '../../components/navBar/navBar';
import SideBar from '../../components/sideBar/sideBar';
import MoviesTable from '../../components/moviesTable/moviesTable';
import Pagination from '../../components/pagination/pagination';
class MoviesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            pageNum: 1
        };
    }
    changeSearch = (e) => {
        this.setState({
            search : e.target.value
        });
    }

    render() {
        let data = [
            {
                sno: 1, 
                name: "Grand Budapest Hotel", 
                genre: "Comedy",
                rating: "Very Good"
            },
            {
                sno: 2, 
                name: "Interstellar", 
                genre: "Sci-Fi",
                rating: "Excellent"
            },
            {
                sno: 3, 
                name: "Inside Out", 
                genre: "Kids",
                rating: "Very Good"
            },
            {
                sno: 4, 
                name: "Harry Potter", 
                genre: "Fantasy",
                rating: "Good"
            },
            {
                sno: 5, 
                name: "The Holiday", 
                genre: "Rom-com",
                rating: "Average"
            // },
            // {
            //     sno: 6, 
            //     name: "The Shining", 
            //     genre: "Horror",
            //     rating: "Good"
            // },
            // {
            //     sno: 7, 
            //     name: "Iron Man", 
            //     genre: "Superhero",
            //     rating: "Good"
            // },
            // {
            //     sno: 8, 
            //     name: "Knocked Up", 
            //     genre: "Comedy",
            //     rating: "Poor"
            }
        ];

        let filteredData = data.filter((movie) => {
            let movieName = movie.name.toLowerCase();
            let search = this.state.search.toLowerCase();
            return movieName.includes(search);
        });

        return (
            <div className="main-container">
                <NavBar/>
                <SideBar/>
                <div className="movie-table-container">
                    <input className="movie-search" type="text" placeholder="Search for movies."  value={this.state.search} onChange={this.changeSearch}/>
                    <MoviesTable data={filteredData}/>
                    <Pagination/>
                </div>
                
            </div>
        );
    }
}

export default MoviesList;