import React from 'react';
import "./sideBarButtons.css";

class SideBarButton extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() { // initial rendering, and re-rendering on any state changes
        return(
            <div className="sidebar-btn">{this.props.text}</div>
        );
    }
}

export default SideBarButton;