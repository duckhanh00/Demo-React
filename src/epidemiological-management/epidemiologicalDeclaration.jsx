import React, { Component } from 'react';

import DatePiker from '../date-piker/datePiker';

class EpidemiologicalDeclaration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gender: 1 // 1 = nam, 0
        }
    }

    shouldComponentUpdate = (nextProps, nextState) => {
        console.log('shouldComponentUpdate');
        return true;
    }
    componentDidUpdate = () => {
        console.log('componentDidUpdate')
    }

    componentDidMount = () => {
        window.$("select#team").on("change", (value) => {
            var selectedD = window.$(value.target).val();
            console.log(selectedD);
            this.setState(state => {
                return {
                    ...state,
                    gender: Number(selectedD)
                }
            })
        });
    }

    render() {
        const { gender } = this.state;
        console.log('render')
        return (
            <React.Fragment>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='form-inline'>
                            <label>Ngày</label>
                            <DatePiker
                                id="index1"
                            />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='form-inline'>
                            <div className='form-group'>
                                <label>Ngày</label>
                                <DatePiker
                                    id="index2"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <select id="team" class="dropdown selectpicker show-menu-arrow show-tick form-control" title="Pelaajat" data-width="100%" data-size="auto">
                    <optgroup>
                        <option value={1}>Nam</option>
                        <option value={0}>Nữ</option>
                    </optgroup>
                </select>
                <div>  
                    {
                        gender === 1 ? <span>Nam</span> : <span>Nữ</span> 
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default EpidemiologicalDeclaration;