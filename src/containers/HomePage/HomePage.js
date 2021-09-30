import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavHeader from './HomeHeader/NavHeader';
import BannerHeader from './HomeHeader/BannerHeader';
import Specialty from './Section/Specialty';

class HomePage extends Component {

    render = () => {
        return (
            <>
                <div className="headers">
                    <NavHeader />
                    <BannerHeader />
                </div>
                <div className="sections" style={{ height: '700px' }}>
                    <Specialty />
                </div>
            </>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
