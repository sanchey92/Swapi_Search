import React, {ChangeEvent, FC, FormEvent, useState} from "react";

interface IProps {
  searchCharacters: Function
}

const CharacterSearch: FC<IProps> = ({searchCharacters}: IProps) => {
  const [searchStr, setSearchStr] = useState('');

  const changeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchStr(event.target.value);
  };

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    searchCharacters(searchStr);
  };

  return (
    <form
      className='form-inline'
      onSubmit={submitHandler}
    >
      <input
        className='form-control mr-sm-2'
        placeholder='enter name...'
        type="search"
        value={searchStr}
        onChange={changeHandler}
      />
      <button
        type='submit'
        className='btn btn-outline-success my-2 my-sm-0'
      >search
      </button>
    </form>
  )
};

export default CharacterSearch;
