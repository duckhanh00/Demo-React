import React, { Component } from 'react';

import './header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 3
        }
    }

    static getDerivedStateFromProps = (nextProps, prevState) => {
    
    }

    shouldComponentUpdate = (nextProps, nextState) => {
        if (nextState.count % 2 === 0) {
            return false;
        }
        return true;
    }

    componentDidMount = () => {
        
    }

    componentDidUpdate = () => {

    }

    render() {
        return (
            <React.Fragment>
                <header className="row">
                    <div className="header">
                        <h5 className='pull-right'>Thống kê Covid<span>|</span>Nguyễn Đức Khánh</h5>
                    </div>
                </header>
            </React.Fragment>
        )
    }
}

export default Header;