import { createStore, combineReducers } from 'redux'

import places from './reducers/places'

const rootReducer = combineReducers({
    places: placesReducer
});

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;