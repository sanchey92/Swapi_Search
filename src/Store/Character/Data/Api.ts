import axios from 'axios';

const URL: string = 'https://swapi.co/api';

const getCharacters = (): Promise<any> => {
  return axios.get(`${URL}/people/`)
};

const searchCharacters = (str: string): Promise<any> => {
  return axios.get(`${URL}/people/?search=${str}`)
};

export {
  getCharacters,
  searchCharacters
}
