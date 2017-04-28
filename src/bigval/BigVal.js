import React, {Component} from 'react';
import './BigVal.css';

class BigVal extends Component {
    constructor(props) {
        super();
        this.state = props;
    }

    render() {
        return (
            <div className="Big-num">
                <span className="Big-value">{this.state.value}</span>
                <span className="Big-label">{this.state.label}</span>
            </div>
        );
    }
}

export default BigVal;
