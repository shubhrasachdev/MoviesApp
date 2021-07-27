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
            pageNum: 1,
            rating: "all"
        };
    }
    changeSearch = (e) => {
        this.setState({
            search : e.target.value,
            pageNum: 1
        });
    }

    changePage = (pgNo) => {
        this.setState({
            pageNum: pgNo
        });
    }

    changeRating = (e) => {
        this.setState({
            rating: e.target.value === "all" ? "all" : parseInt(e.target.value),
            pageNum: 1
        });
    }

    render() {
        let data = [
            {
                sno: 1, 
                name: "Grand Budapest Hotel", 
                genre: "Comedy",
                rating: 4
            },
            {
                sno: 2, 
                name: "Interstellar", 
                genre: "Sci-Fi",
                rating: 5
            },
            {
                sno: 3, 
                name: "Inside Out", 
                genre: "Kids",
                rating: 4
            },
            {
                sno: 4, 
                name: "Harry Potter", 
                genre: "Fantasy",
                rating: 3
            },
            {
                sno: 5, 
                name: "The Holiday", 
                genre: "Rom-com",
                rating: 3
            },
            {
                sno: 6, 
                name: "The Shining", 
                genre: "Horror",
                rating: 3
            },
            {
                sno: 7, 
                name: "Iron Man", 
                genre: "Superhero",
                rating: 3
            },
            {
                sno: 8, 
                name: "Knocked Up", 
                genre: "Comedy",
                rating: 2
            },
            {
                sno: 9, 
                name: "Casablanca", 
                genre: "Romance",
                rating: 5
            },
            {
                sno: 10, 
                name: "The Maze Runner", 
                genre: "Action",
                rating: 3
            },
            {
                sno: 11, 
                name: "Bad Neighbours", 
                genre: "Comedy",
                rating: 2
            },
            {
                sno: 12, 
                name: "Superbad", 
                genre: "Comedy",
                rating: 4
            },
            {
                sno: 13, 
                name: "Trainwreck", 
                genre: "Rom-com",
                rating: 3
            },
            {
                sno: 14, 
                name: "Transporter", 
                genre: "Action",
                rating: 3
            }
        ];

        let filteredData = data.filter((movie) => {
            if(this.state.rating !== "all") return movie.rating === this.state.rating;
            return true;
        });
        filteredData = filteredData.filter((movie) => {
            let movieName = movie.name.toLowerCase();
            let search = this.state.search.toLowerCase();
            return movieName.includes(search);
        });

        let finalData = [];
        for(let i = (this.state.pageNum - 1) * 5; (i < this.state.pageNum * 5) && (i < filteredData.length); i++) {
            finalData.push(filteredData[i]);
        }

        return (

            <div className="main-container">
                <NavBar/>
                <SideBar/>
                <div className="movie-table-container">
                    <div className="filters">
                        <input className="movie-search" type="text" placeholder="Search for movies."  value={this.state.search} onChange={this.changeSearch}/>
                        <select className="rating-dropdown" name="Rating" onChange={this.changeRating} style={{color: "#86817c", fontFamily: "Segoe UI", fontWeight: 400}}>Rating
                            <option value={"all"} >All Ratings</option>
                            <option value={0}>0</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                        </select>
                    </div>
                    <MoviesTable data={finalData}/>
                    <Pagination totalMovies={filteredData.length} changePage={this.changePage} activePageNum={this.state.pageNum}/>
                </div>
                
            </div>
        );
    }
}

export default MoviesList;