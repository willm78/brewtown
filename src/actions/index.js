import * as loginActions from "./login";
import * as counterActions from "./counter";
import * as userActions from "./users";
import * as recipeActions from "./recipes";

module.exports = {
  ...loginActions,
  ...counterActions,
  ...userActions,
  ...recipeActions
};
