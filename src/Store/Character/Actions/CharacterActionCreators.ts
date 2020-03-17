import CharacterActionTypes from "./CharacterActionTypes_enum";
import {
  IGetCharactersFailureAction,
  IGetCharactersStartAction,
  IGetCharactersSuccessAction,
  ISearchCharacterAction,
  ISetCharacterAction
} from "./IGetCharacterActions_interface";
import ICharacter from "../Data/ICharacter_Interface";

const getCharactersStartActionCreator = (): IGetCharactersStartAction => {
  return {
    type: CharacterActionTypes.GET_CHARACTERS_START,
    isFetching: true
  }
};

const getCharactersSuccessActionCreator = (characters: ICharacter[]): IGetCharactersSuccessAction => {
  return {
    type: CharacterActionTypes.GET_CHARACTERS_SUCCESS,
    characters,
    isFetching: false
  }
};

const getCharactersFailureActionCreator = (): IGetCharactersFailureAction => {
  return {
    type: CharacterActionTypes.GET_CHARACTERS_FAILURE,
    isFetching: false
  }
};

const searchCharacterActionCreator = (str: string): ISearchCharacterAction => {
  return {
    type: CharacterActionTypes.SEARCH_CHARACTERS,
    str,
    isFetching: true
  }
};
const setCharacterActionCreator = (character: ICharacter): ISetCharacterAction => {
  return {
    type: CharacterActionTypes.SET_CHARACTER,
    character,
    isFetching: false
  }
};

export {
  getCharactersFailureActionCreator,
  getCharactersStartActionCreator,
  getCharactersSuccessActionCreator,
  searchCharacterActionCreator,
  setCharacterActionCreator
}
