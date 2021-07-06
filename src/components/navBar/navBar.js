import React from "react";
import "./navBar.css";
import NavBarButton from "../navBarButtons/navBarButtons";
class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="navbar">
                <NavBarButton text="Home"/>
                <NavBarButton text="About"/>
                <NavBarButton text="Nav Bar Button 3"/>
                <NavBarButton text="Nav Bar Button 4"/>
            </div>
        );

    }
}

export default NavBar;