import React, { Component } from 'react';
import { connect } from 'react-redux';
import './BannerHeader.scss';

// Chèn format chuyển đổi ngôn ngữ
import { FormattedMessage } from 'react-intl';

class BannerHeader extends Component {

    render = () => {
        return (
            <>
                <div className="home-header-banner">
                    <div className="content-up">
                        <div className="title-1">
                            <FormattedMessage id="bannerheader.title1" />
                        </div>
                        <div className="title-2">
                            <FormattedMessage id="bannerheader.title2" />
                        </div>
                        <div className="search">
                            <i className="fas fa-search"></i>
                            <input type="text" placeholder={this.props.language === 'vi' ? 'Tìm lý do khám' : 'Find a reason to check'} />
                        </div>
                    </div>

                    <div className="content-down">
                        <div className="option">
                            <div className="option-child">
                                <div className="icon-child">
                                    <i className="far fa-hospital"></i>
                                </div>
                                <div className="text-child">
                                    <FormattedMessage id="bannerheader.special-medical-examination" />
                                </div>
                            </div>
                        </div>

                        <div className="option">
                            <div className="option-child">
                                <div className="icon-child">
                                    <i className="fas fa-hospital-alt"></i>
                                </div>
                                <div className="text-child">
                                    <FormattedMessage id="bannerheader.remote-medical-examination" />
                                </div>
                            </div>
                        </div>

                        <div className="option">
                            <div className="option-child">
                                <div className="icon-child">
                                    <i className="fas fa-procedures"></i>
                                </div>
                                <div className="text-child">
                                    <FormattedMessage id="bannerheader.physical-medical-examination" />
                                </div>
                            </div>
                        </div>

                        <div className="option">
                            <div className="option-child">
                                <div className="icon-child">
                                    <i className="fas fa-hospital-symbol"></i>
                                </div>
                                <div className="text-child">
                                    <FormattedMessage id="bannerheader.medical-test" />
                                </div>
                            </div>
                        </div>

                        <div className="option">
                            <div className="option-child">
                                <div className="icon-child">
                                    <i className="fas fa-briefcase-medical"></i>
                                </div>
                                <div className="text-child">
                                    <FormattedMessage id="bannerheader.mental-health" />
                                </div>
                            </div>
                        </div>

                        <div className="option">
                            <div className="option-child">
                                <div className="icon-child">
                                    <i className="fas fa-ambulance"></i>
                                </div>
                                <div className="text-child">
                                    <FormattedMessage id="bannerheader.dental-examination" />
                                </div>
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BannerHeader);
