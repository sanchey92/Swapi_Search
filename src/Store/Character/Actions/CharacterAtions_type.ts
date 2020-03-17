import {
  ISetCharacterAction,
  ISearchCharacterAction,
  IGetCharactersStartAction,
  IGetCharactersSuccessAction,
  IGetCharactersFailureAction
} from './IGetCharacterActions_interface';

type CharacterActions =
  ISetCharacterAction
  | ISearchCharacterAction
  | IGetCharactersStartAction
  | IGetCharactersSuccessAction
  | IGetCharactersFailureAction;

export default CharacterActions;
