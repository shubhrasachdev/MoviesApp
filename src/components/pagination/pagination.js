import React from 'react';
import "./pagination.css"
class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="pagination">
                <div className="pagination-btn">1</div>
                <div className="pagination-btn">2</div>
                <div className="pagination-btn">3</div>
            </div>
        )
    }
}

export default Pagination;