import React from 'react';
import "./navBarButtons.css"
class NavBarButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="navbar-btn">{this.props.text}</div>
        );
    }
}

export default NavBarButton;