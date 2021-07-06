import React from 'react';
import "./sideBar.css";
import SideBarButton from '../sideBarButtons/sideBarButtons';

class SideBar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() { // initial rendering, and re-rendering on any state changes
        return(
            <div className="sidebar">
                <SideBarButton text="All Genres"/>
                <SideBarButton text="Action"/>
                <SideBarButton text="Mystery"/>
            </div>
        );
    }
}

export default SideBar;