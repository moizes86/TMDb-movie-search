import { combineReducers } from 'redux';

import autoSuggestReducer from './auto-suggest/auto-suggest.reducer';
import mainPageReducer from './main-page/main-page.reducer';
import modalReducer from './modal/modal.reducer';

export default combineReducers({
    autoSuggest: autoSuggestReducer,
    mainPage: mainPageReducer,
    modal: modalReducer,
});