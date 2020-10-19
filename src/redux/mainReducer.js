import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn2149244Reducer from '../features/SignIn2149244/redux/reducers'
import SignIn2149222Reducer from '../features/SignIn2149222/redux/reducers'
import SignIn2149208Reducer from '../features/SignIn2149208/redux/reducers'
import SignIn2149129Reducer from '../features/SignIn2149129/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn2149244: SignIn2149244Reducer,
SignIn2149222: SignIn2149222Reducer,
SignIn2149208: SignIn2149208Reducer,
SignIn2149129: SignIn2149129Reducer,

});