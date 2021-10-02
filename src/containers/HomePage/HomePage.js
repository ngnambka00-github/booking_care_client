import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavHeader from './HomeHeader/NavHeader';
import BannerHeader from './HomeHeader/BannerHeader';
import Specialty from './Section/Specialty';
import OutstandingFacility from './Section/OutstandingFacility';
import OutstandingDoctor from './Section/OutstandingDoctor';
import Handbook from './Section/Handbook';
import Footer from './Section/Footer';

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
                    <OutstandingFacility />
                    <OutstandingDoctor />
                    <Handbook />
                    <Footer />
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
