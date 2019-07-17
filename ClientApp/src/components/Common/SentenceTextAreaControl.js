import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class SentenceTextAreaControl extends Component {
    render() {
        let inputClass = this.props.valid
            ? "form-control border-danger shadow-error" : "form-control";
        let messageClass = "form-text text-danger";

        const label = this.props.label;

        return (
            <Fragment>
                { label ? <label className="control-label">{label}</label> : null }
                <textarea
                    name={this.props.field}
                    className={inputClass}
                    rows={this.props.rows}
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                    onChange={this.props.onChange}>
                </textarea>
                <small id="error" className={messageClass}>
                    {this.props.message}
                </small>
            </Fragment>
        );
    }
}

SentenceTextAreaControl.propTypes = {
    field: PropTypes.string.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    valid: PropTypes.bool.isRequired,
    message: PropTypes.string,
    onChange: PropTypes.func.isRequired
}

SentenceTextAreaControl.defaultProps = {
    valid: false
}

export default SentenceTextAreaControl;