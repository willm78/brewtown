import React from 'react';
import { connect } from 'react-redux';

import StateView from '../components/StateView';

const mapStateToProps = (state) => {
    return {
        text: JSON.stringify(state, null, 2)
    };
};

export default connect(
    mapStateToProps
)(StateView);