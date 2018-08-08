import React from "../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react";
import { connect } from "../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react-redux";

import StateView from "../components/StateView";

const mapStateToProps = state => {
  return {
    text: JSON.stringify(state, null, 2)
  };
};

export default connect(mapStateToProps)(StateView);
