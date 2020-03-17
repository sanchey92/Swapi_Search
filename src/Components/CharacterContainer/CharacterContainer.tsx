import React, {FC, useEffect} from "react";
import {connect} from "react-redux";
import IAppState from "../../Store/IAppState_interface";
import ICharacter from "../../Store/Character/Data/ICharacter_Interface";
import CharacterNavbar from "../CharacterNavbar/CharacterNavbar";
import CharacterSearch from "../CharacterSearch/CharacterSearch";
import Character from "../Character/Character";
import CharacterList from "../CharacterlLst/CharacterlLst";
import CharacterListItem from "../CharacterlLstItem/CharacterlLstItem";
import Loader from "../Loader/Loader";
import CharacterMissing from "../CharacterMissing/CharacterMissing";
import {
  setCharacterActionCreator,
  getCharactersStartActionCreator,
  searchCharacterActionCreator
} from "../../Store/Character/Actions/CharacterActionCreators";

interface IProps {
  getCharacters: Function,
  setCharacter: Function,
  searchCharacters: Function,
  character: any,
  characters: ICharacter[],
  isFetching: Boolean
}

const CharacterContainer: FC<IProps> = ({
                                          getCharacters,
                                          setCharacter,
                                          searchCharacters,
                                          character,
                                          characters,
                                          isFetching
                                        }) => {

  useEffect(() => {
    getCharacters()
  },[getCharacters]);

  return (
    <div className='characters-container'>
      <CharacterNavbar>
        <CharacterSearch searchCharacters={searchCharacters}/>
      </CharacterNavbar>
      {
        isFetching
        ? <Loader/>
        : (
          <div className='row'>
            <div className='col-sm'>
              <CharacterList
                setCharacter={setCharacter}
                characters={characters}/>
            </div>
            <div className='col-sm'>
              {
                character
                ? <Character character={character}/>
                : <CharacterMissing/>
              }
            </div>
          </div>
          )
      }
    </div>
  )
};

const mapStateToProps = (state: IAppState) => {
  const {character, characters, isFetching} = state.characterState;
  return {characters, character, isFetching};
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getCharacters: () => dispatch(getCharactersStartActionCreator()),
    setCharacter: (character: any) => dispatch(setCharacterActionCreator(character)),
    searchCharacters: (str: string) => dispatch(searchCharacterActionCreator(str))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterContainer);
