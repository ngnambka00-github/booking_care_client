import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

class UserRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
    }


    render() {
        return (
            <>
                <div className="user-redux-container" >
                    <div className="title text-center h2 text-primary mt-4">
                        User management redux
                    </div>

                    <div className="user-redux-body">
                        <div>Thêm mới người dùng</div>
                    </div>
                </div>

            </>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
