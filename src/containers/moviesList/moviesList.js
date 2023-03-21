import React from 'react';
import "./moviesList.css";
import NavBar from '../../components/navBar/navBar';
import SideBar from '../../components/sideBar/sideBar';
import MoviesTable from '../../components/moviesTable/moviesTable';
import Pagination from '../../components/pagination/pagination';
import Loader from '../../components/loader/loader';
import { HandleGetMovies } from './dataManager';
import { connect } from 'react-redux';
class MoviesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            pageNum: 1,
            rating: "all",
            data: [],
            loader: true
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

    async componentDidMount() {
        let data = await HandleGetMovies(); 
        this.setState({
            data: data,
            loader: false
        });
        // this.props.updateMovies(data); 
    } 

    render() {
        let data = this.state.data;
        let filteredData = data.filter((movie) => {
            if(this.state.rating !== "all") return movie.rating === this.state.rating;
            return true;
        });
        
        filteredData = filteredData.filter((movie) => {
            let movieName = movie.name.toLowerCase();
            let search = this.state.search.toLowerCase();
            return movieName.includes(search);
        });


        let sno = 1;
        filteredData  = filteredData.map((movie) => {
            movie.sno = sno++;
            return movie;
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
                        <select className="rating-dropdown" name="Rating" onChange={this.changeRating} style={{color: "#86817c", fontFamily: "Segoe UI", fontWeight: 400}}>
                            <option value={"all"} >All Ratings</option>
                            <option value={0}>0</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                        </select>
                    </div>
                    {this.state.loader ? <Loader></Loader> : ""}
                    <MoviesTable data={finalData}/>
                    <Pagination totalMovies={filteredData.length} changePage={this.changePage} activePageNum={this.state.pageNum}/>
                </div>
                
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        data: state.data
    }
}

const mapActionToProps = dispatch => {
    return {
        updateMovies: (data) => dispatch({type: "updateMovies", data: data})
    }
}

export default connect(mapStateToProps, mapActionToProps)(MoviesList);