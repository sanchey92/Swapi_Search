import React, {FC, MouseEvent} from "react";
import ICharacter from "../../Store/Character/Data/ICharacter_Interface";

interface IProps {
  character: ICharacter;
  setCharacter: Function
}

const CharacterListItem: FC<IProps> = ({character, setCharacter}: IProps) => {

  const clickHandler = (event: MouseEvent) => {
    event.preventDefault();
    setCharacter(character)
  };

  return (
    <li
      className='list-group-item'
      key={character.name}
      onClick={clickHandler}
    >
      {character.name}
    </li>
  )
};

export default CharacterListItem;
