import React, { Component } from 'react';

import './datePiker.css';

class DatePiker extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount = () => {
        const { id } = this.props;

        window.$(`#${id}`).datepicker({
            format: "dd/mm/yyyy"
        });
    }

    componentDidUpdate = () => {

    }

    render() {
        const { id } = this.props;

        return (
            <React.Fragment>
               <div className='container' style={{ width: '50%' }}>
                    <div className="input-group">
                        <input id={id} type="text" className="form-control date-input"/>
                        <label className="input-group-btn" for="txtDate">
                            <span className="btn btn-default">
                                <span className="glyphicon glyphicon-calendar"></span>
                            </span>
                        </label>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default DatePiker;