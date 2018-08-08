import { NavigationActions, StackActions } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

//    or navigate({routename, params, action, key})
function navigate(routeName, params, action) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
      action
    })
  )
};

function back(key=null) {
  _navigator.dispatch(
    NavigationActions.back(key)
  )
};

function setParams(params, key) {
  _navigator.dispatch(
    NavigationActions.setParams(params, key)
  )
};

function reset(index, actions, key=null) {
  _navigator.dispatch(
    StackActions.reset({
      index: index,
      actions: actions,
      key: key
    })
  )
};

export default {
  navigate,
  back,
  setParams,
  reset,
  setTopLevelNavigator,
};