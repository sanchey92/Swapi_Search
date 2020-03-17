import {applyMiddleware, combineReducers, createStore, Store} from 'redux'
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from "redux-devtools-extension";
import {charactersSaga} from "./Character/Sagas/Saga";
import CharacterReducer from "./Character/Reducers/CharacterReducer";
import IAppState from "./IAppState_interface";

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers<IAppState>({
  characterState: CharacterReducer
});

export default function  configureStore(): Store<IAppState, any> {
  const store = createStore(
    rootReducer,
    undefined,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(charactersSaga);
  return store
}
