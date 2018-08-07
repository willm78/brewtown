import React from 'react';
import { connect } from 'react-redux';

import StateView from '../components/StateView';

const mapStateToProps = (state, ownProps) => {
    return {
        stateString: JSON.stringify(state, null, 2)
    };
};

export default connect(
    mapStateToProps
)(StateView);

