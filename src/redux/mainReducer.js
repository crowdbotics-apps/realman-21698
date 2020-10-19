import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn2149208Reducer from '../features/SignIn2149208/redux/reducers'
import SignIn2149129Reducer from '../features/SignIn2149129/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn2149208: SignIn2149208Reducer,
SignIn2149129: SignIn2149129Reducer,

});