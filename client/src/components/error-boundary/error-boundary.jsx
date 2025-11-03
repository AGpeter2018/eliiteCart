import React from "react";

import './error-boundary.style.scss'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasErrored: false
        }
    }
    static getDerivedStateFromError(error) {
        return {
            hasErrored: true
        }
    }

    componentDidCatch(error, info) {
        console.log(error)
    }

    render() {
        if(this.state.hasErrored) {
           return(
            <div className="overlay">
                <div className="error-image-container">
                    <img src='https://i.imgur.com/yW2W9SC.png' alt="error" />
                </div>
                <div className="error-image-text">
                    Sorry this page is broken
                </div>
            </div>
           )
        }

        return this.props.children
    }
}

export default ErrorBoundary;