import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import './NavHeader.scss';
import { LANGUAGES } from '../../../utils';
import { changeLanguageApp } from '../../../store/actions';

// Chèn format chuyển đổi ngôn ngữ
import { FormattedMessage } from 'react-intl';

class NavHeader extends Component {

    // Function change language vi/en
    onChangeLanguage = (language) => {
        // fire event
        this.props.changeLanguageAppNavHeader(language);
    }

    render = () => {
        let { language } = this.props;
        return (
            <>
                <div className="home-header-container">
                    <div className="home-header-content">
                        <div className="left-content">
                            <i className="fas fa-bars"></i>
                            <div className="header-logo"></div>
                        </div>

                        <div className="center-content">
                            <div className="child-content">
                                <div>
                                    <b className="main-title">
                                        <FormattedMessage id="navheader.speciality" />
                                    </b>
                                </div>
                                <div className="subtitle">
                                    <FormattedMessage id="navheader.search-doctor" />
                                </div>
                            </div>

                            <div className="child-content">
                                <div>
                                    <b className="main-title">
                                        <FormattedMessage id="navheader.health-facility" />
                                    </b>
                                </div>
                                <div className="subtitle">
                                    <FormattedMessage id="navheader.select-hospital" />
                                </div>
                            </div>

                            <div className="child-content">
                                <div>
                                    <b className="main-title">
                                        <FormattedMessage id="navheader.doctor" />
                                    </b>
                                </div>
                                <div className="subtitle">
                                    <FormattedMessage id="navheader.select-doctor" />
                                </div>
                            </div>

                            <div className="child-content">
                                <div>
                                    <b className="main-title">
                                        <FormattedMessage id="navheader.medical-package" />
                                    </b>
                                </div>
                                <div className="subtitle">
                                    <FormattedMessage id="navheader.health-check" />
                                </div>
                            </div>
                        </div>

                        <div className="right-content">
                            <div className="support">
                                <i className="fas fa-question-circle"></i>
                                <span>
                                    <FormattedMessage id="navheader.support" />
                                </span>
                            </div>

                            <div className="flag">
                                <span
                                    className={classNames('language', 'flag-vi', {
                                        active: language === LANGUAGES.VI
                                    })}
                                    onClick={() => this.onChangeLanguage(LANGUAGES.VI)}>
                                    VI
                                </span>
                                <span
                                    className={classNames({
                                        language: true,
                                        'flag-en': true,
                                        active: language === LANGUAGES.EN
                                    })}
                                    onClick={() => this.onChangeLanguage(LANGUAGES.EN)}>
                                    EN
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeLanguageAppNavHeader: (language) => dispatch(changeLanguageApp(language)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavHeader);
