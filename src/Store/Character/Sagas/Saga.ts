import {put, call, takeEvery, all} from 'redux-saga/effects'
import CharacterActionTypes from "../Actions/CharacterActionTypes_enum";
import {getCharacters, searchCharacters} from '../Data/Api';
import {ISearchCharacterAction} from '../Actions/IGetCharacterActions_interface'
import {getCharactersSuccessActionCreator, getCharactersFailureActionCreator} from '../Actions/CharacterActionCreators'

function* getCharactersSaga(): any {
  try {
    const response = yield call(getCharacters);
    const characters = response.data.results;
    yield put(getCharactersSuccessActionCreator(characters))
  } catch (error) {
    yield put(getCharactersFailureActionCreator())
  }
}

function* searchCharacterSaga(action: ISearchCharacterAction): any {
  try {
    const response = yield call(searchCharacters, action.str);
    const characters = response.data.results;
    yield put(getCharactersSuccessActionCreator(characters))
  } catch(error) {
    yield put(getCharactersFailureActionCreator())
  }
}

function* charactersSaga() {
  yield all([
    takeEvery(CharacterActionTypes.GET_CHARACTERS_START, getCharactersSaga),
    takeEvery(CharacterActionTypes.SEARCH_CHARACTERS, searchCharacterSaga)
  ])
}

export {
  getCharactersSaga,
  searchCharacterSaga,
  charactersSaga
}
