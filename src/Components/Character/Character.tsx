import React, {FC, Fragment} from "react";
import ICharacter from "../../Store/Character/Data/ICharacter_Interface";

interface IProps {
  character: ICharacter
}

const Character: FC<IProps> = ({character}: IProps) => {
  return (
    <Fragment>
      <h2>{character.name}</h2>
      <table className='table'>
        <thead>
        <tr>
          <th scope="col">Info</th>
          <th scope="col">Value</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row">Height</th>
          <td>{character.height}</td>
        </tr>
        <tr>
          <th scope="row">Mass</th>
          <td>{character.mass}</td>
        </tr>
        </tbody>
      </table>
    </Fragment>
  )
};

export default Character;
