import React from 'react';

class ErrorsList extends React.Component {
    render() {
        const {errors} = this.props;
        if (errors) {
            return (
                <div className="alert alert-danger">
                    <ul>
                        {
                            Object.keys(errors).map(key => {
                                return (
                                    <li key={key}>
                                        {key} {errors[key]}
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default ErrorsList;