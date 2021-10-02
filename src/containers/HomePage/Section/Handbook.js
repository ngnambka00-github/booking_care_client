import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Section.scss';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// Chèn format chuyển đổi ngôn ngữ
import { FormattedMessage } from 'react-intl';
import Section from './Section';

class Handbook extends Component {

    render = () => {
        let settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2
        };

        return (
            <Section
                title={"Cẩm nang"}
                buttonTitle={"Tất cả bài viết"}
                backgroundColor={"#f5f5f5"}>
                <Slider {...settings}>
                    <div className="item-handbook">
                        <div className="handbook-image">
                            <img src="https://cdn.bookingcare.vn/fr/w300/2021/10/01/232307-bac-si-tu-van-tam-ly-online-gioi-hanoi-tphcm.jpg" />
                        </div>

                        <div className="handbook-content">
                            <span>
                                8 Bác sĩ Tâm lý giỏi tư vấn online mùa dịch COVID-19 ở Hà Nội và TPHCM
                            </span>
                        </div>
                    </div>

                    <div className="item-handbook">
                        <div className="handbook-image">
                            <img src="https://cdn.bookingcare.vn/fr/w300/2021/10/01/232307-bac-si-tu-van-tam-ly-online-gioi-hanoi-tphcm.jpg" />
                        </div>

                        <div className="handbook-content">
                            <span>
                                8 Bác sĩ Tâm lý giỏi tư vấn online mùa dịch COVID-19 ở Hà Nội và TPHCM
                            </span>
                        </div>
                    </div>

                    <div className="item-handbook">
                        <div className="handbook-image">
                            <img src="https://cdn.bookingcare.vn/fr/w300/2021/10/01/232307-bac-si-tu-van-tam-ly-online-gioi-hanoi-tphcm.jpg" />
                        </div>

                        <div className="handbook-content">
                            <span>
                                8 Bác sĩ Tâm lý giỏi tư vấn online mùa dịch COVID-19 ở Hà Nội và TPHCM
                            </span>
                        </div>
                    </div>

                    <div className="item-handbook">
                        <div className="handbook-image">
                            <img src="https://cdn.bookingcare.vn/fr/w300/2021/10/01/232307-bac-si-tu-van-tam-ly-online-gioi-hanoi-tphcm.jpg" />
                        </div>

                        <div className="handbook-content">
                            <span>
                                8 Bác sĩ Tâm lý giỏi tư vấn online mùa dịch COVID-19 ở Hà Nội và TPHCM
                            </span>
                        </div>
                    </div>

                    <div className="item-handbook">
                        <div className="handbook-image">
                            <img src="https://cdn.bookingcare.vn/fr/w300/2021/10/01/232307-bac-si-tu-van-tam-ly-online-gioi-hanoi-tphcm.jpg" />
                        </div>

                        <div className="handbook-content">
                            <span>
                                8 Bác sĩ Tâm lý giỏi tư vấn online mùa dịch COVID-19 ở Hà Nội và TPHCM
                            </span>
                        </div>
                    </div>

                    <div className="item-handbook">
                        <div className="handbook-image">
                            <img src="https://cdn.bookingcare.vn/fr/w300/2021/10/01/232307-bac-si-tu-van-tam-ly-online-gioi-hanoi-tphcm.jpg" />
                        </div>

                        <div className="handbook-content">
                            <span>
                                8 Bác sĩ Tâm lý giỏi tư vấn online mùa dịch COVID-19 ở Hà Nội và TPHCM
                            </span>
                        </div>
                    </div>

                    <div className="item-handbook">
                        <div className="handbook-image">
                            <img src="https://cdn.bookingcare.vn/fr/w300/2021/10/01/232307-bac-si-tu-van-tam-ly-online-gioi-hanoi-tphcm.jpg" />
                        </div>

                        <div className="handbook-content">
                            <span>
                                8 Bác sĩ Tâm lý giỏi tư vấn online mùa dịch COVID-19 ở Hà Nội và TPHCM
                            </span>
                        </div>
                    </div>

                    <div className="item-handbook">
                        <div className="handbook-image">
                            <img src="https://cdn.bookingcare.vn/fr/w300/2021/10/01/232307-bac-si-tu-van-tam-ly-online-gioi-hanoi-tphcm.jpg" />
                        </div>

                        <div className="handbook-content">
                            <span>
                                8 Bác sĩ Tâm lý giỏi tư vấn online mùa dịch COVID-19 ở Hà Nội và TPHCM
                            </span>
                        </div>
                    </div>
                </Slider>

            </Section>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Handbook);
