import React, {FC} from "react";
import ICharacter from "../../Store/Character/Data/ICharacter_Interface";
import CharacterListItem from "../CharacterlLstItem/CharacterlLstItem";

interface IProps {
  setCharacter: Function;
  characters: ICharacter[];
}

const CharacterList: FC<IProps> = ({setCharacter, characters}: IProps) => {
  return (
    <ul className='list-group'>
      {
        characters.map((character) => {
          return (
            <CharacterListItem
              key={character.name}
              character={character}
              setCharacter={setCharacter}
            />
          )
        })
      }
    </ul>
  )
};

export default CharacterList;
