import {Reducer} from 'redux';

import CharacterActions from "../Actions/CharacterAtions_type";
import CharacterActionTypes from "../Actions/CharacterActionTypes_enum";
import ICharacterState from "../Data/ICharacterState_Interface";

const initialState: ICharacterState = {
  character: undefined,
  characters: [],
  isFetching: false
};

const CharacterReducer: Reducer<ICharacterState, CharacterActions> = (
  state = initialState, actions) => {
  switch (actions.type) {

    case CharacterActionTypes.SET_CHARACTER:
      return {
        ...state,
        character: actions.character
      };

    case CharacterActionTypes.SEARCH_CHARACTERS:
      return {
        ...state,
        isFetching: actions.isFetching
      };

    case CharacterActionTypes.GET_CHARACTERS_START:
      return {
        ...state,
        isFetching: actions.isFetching
      };

    case CharacterActionTypes.GET_CHARACTERS_SUCCESS:
      return {
        ...state,
        characters: actions.characters,
        isFetching: actions.isFetching
      };

    case CharacterActionTypes.GET_CHARACTERS_FAILURE:
      return {
        ...state,
        isFetching: actions.isFetching
      };

    default:
      return state
  }
};

export default CharacterReducer;
