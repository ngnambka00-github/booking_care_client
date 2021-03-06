import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from "../../store/actions";
import Navigator from '../../components/Navigator';
import { adminMenu } from './menuApp';
import { LANGUAGES } from '../../utils';
import './Header.scss';

class Header extends Component {

    onChangeLanguage = (language) => {
        this.props.changeLanguageAppHeaderSystem(language);
    }

    render() {
        const { processLogout, language } = this.props;

        return (
            <div className="header-container">
                {/* thanh navigator */}
                <div className="header-tabs-container">
                    <Navigator menus={adminMenu} />
                </div>

                <div className="flag">
                    <span className={language === LANGUAGES.VI ? "language flag-vi active" : "language flag-vi"}
                        onClick={() => this.onChangeLanguage(LANGUAGES.VI)}>
                        VI
                    </span>
                    <span className={language === LANGUAGES.EN ? "language flag-en active" : "language flag-en"}
                        onClick={() => this.onChangeLanguage(LANGUAGES.EN)}>
                        EN
                    </span>

                    {/* nút logout */}
                    <div className="btn btn-logout" onClick={processLogout} title="Logout">
                        <i className="fas fa-sign-out-alt"></i>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
        changeLanguageAppHeaderSystem: (language) => dispatch(actions.changeLanguageApp(language)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
