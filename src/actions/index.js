import * as loginActions from "./login";
import * as counterActions from "./counter";

module.exports = {
  ...loginActions,
  ...counterActions
};
