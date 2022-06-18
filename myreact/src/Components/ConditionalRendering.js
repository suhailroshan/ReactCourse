import React from "react";
import Lifecycle from "./Lifecycle";

export default class ConditionalRendering extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
        }
    }

    handleclick = (e) => {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        return (
            <div>
                {this.state.show &&
                    <Lifecycle />
                }

                <button
                    onClick={this.handleclick} >
                    {this.state.show === false ?'click me' : 'Hide'}
                </button>
            </div>
        )
    }
}