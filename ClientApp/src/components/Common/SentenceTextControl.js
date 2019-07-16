import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SentenceTextControl extends Component {
    getInputClass(valid, value) {
        if (valid) {
            return "mr-3 form-control border-danger shadow-error";
        } else {
            if (value === '') {
                return "mr-3 form-control";
            } else {
                return "mr-3 form-control border-success shadow-success";
            }
        }
    }

    getMessageClass(valid) {
        if (valid) {
            return "form-text text-danger";
        } else {
            return "form-text text-success";
        }
    }

    getMessage(valid, value) {
        if (valid) {
            return <i className="fas fa-times" style={{ fontSize: 30 }}></i>;
        } else {
            if (value !== '') {
                return <i className="fas fa-check" style={{ fontSize: 30 }}></i>;
            }
        }
    }

    render() {
        let inputClass = this.getInputClass(this.props.valid, this.props.value);
        let messageClass = this.getMessageClass(this.props.valid);

        return (
            <div className="d-flex form-group">
                <input
                    type={this.props.type}
                    name={this.props.field}
                    value={this.props.value}
                    className={inputClass}
                    placeholder={this.props.placeholder}
                    onChange={this.props.onChange} />
                <small id="emailError" className={messageClass}>
                    {this.getMessage(this.props.valid, this.props.value)}
                </small>
            </div>
        );
    }
}

SentenceTextControl.propTypes = {
    field: PropTypes.string.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    valid: PropTypes.bool,
    message: PropTypes.string,
    onChange: PropTypes.func
}

SentenceTextControl.defaultProps = {
    value: '',
    type: 'text'
}

export default SentenceTextControl;