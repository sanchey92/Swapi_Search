import ICharacter from "./ICharacter_Interface";

export default interface ICharacterState {
  readonly character?: ICharacter;
  readonly characters: ICharacter[];
  readonly isFetching: boolean;
}
