import { combineReducers } from "redux";

import thisUser from "./thisUser";
import localCounter from "./localCounter";
// import comments from './comments';
// import users from './users';
// import recipes from './recipes';
// import hops from './hops';
// import fermentables from './fermentables';
// import yeasts from './yeasts';
// import waters from './waters';
// import styles from './styles';
// import mashSteps from './mashSteps';
// import mashs from './mashs';
// import equipments from './equipments';

// const entitiesReducer = combineReducers({
//   comments,
//   users,
//   recipes,
//   hops,
//   fermentables,
//   yeasts,
//   waters,
//   styles,
//   mashSteps,
//   mashs,
//   equipments
// })

const rootReducer = combineReducers({
  thisUser,
  localCounter
  // entitiesReducer
});

export default rootReducer;
