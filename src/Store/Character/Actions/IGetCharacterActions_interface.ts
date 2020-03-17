import ICharacter from "../Data/ICharacter_Interface";
import CharacterActionTypes from "./CharacterActionTypes_enum";

export interface ISetCharacterAction {
  type: CharacterActionTypes.SET_CHARACTER;
  character: ICharacter;
  isFetching: false;
}

export interface ISearchCharacterAction {
  type: CharacterActionTypes.SEARCH_CHARACTERS;
  str: string;
  isFetching: true;
}

export interface IGetCharactersStartAction {
  type: CharacterActionTypes.GET_CHARACTERS_START;
  isFetching: true;
}

export interface IGetCharactersSuccessAction {
  type: CharacterActionTypes.GET_CHARACTERS_SUCCESS,
  characters: ICharacter[],
  isFetching: false,
}
export interface IGetCharactersFailureAction {
  type: CharacterActionTypes.GET_CHARACTERS_FAILURE,
  isFetching: false,
}


