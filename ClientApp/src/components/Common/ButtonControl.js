import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonControl extends Component {
    render() {
        let float = "float-" + this.props.float;

        return (
            <button
                className={"btn btn-success " + float}
                type={this.props.type}
                onClick={this.props.onClick}>
                    {this.props.text}
            </button>
        );
    }
}

ButtonControl.propTypes = {
    float: PropTypes.string,
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

ButtonControl.defaultProps = {
    float: 'right',
    disabled: false,
    type: 'submit'
}

export default ButtonControl;