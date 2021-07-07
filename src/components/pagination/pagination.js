import React from 'react';
import "./pagination.css"
class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let numOfPages = Math.ceil(this.props.totalMovies/5);
        let paginationBtns = [];
        for(let i = 0; i < numOfPages; i++) {
            paginationBtns.push(<div onClick={() => {
                this.props.changePage(i + 1);
            }} className={this.props.activePageNum === i + 1 ? "pagination-btn active" : "pagination-btn"}>{i + 1}</div>);
        }
        return (
            <div className="pagination">
                {paginationBtns}
            </div>
        )
    }
}

export default Pagination;