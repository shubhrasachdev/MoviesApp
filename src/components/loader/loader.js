import React from "react";
import "./loader.css";
import loader from './loader.gif';

class Loader extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="loader">
                <img src={loader} alt="loader"></img>
            </div>
        );

    }
    
}

export default Loader;