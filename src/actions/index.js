import axios from 'axios';

export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USER = 'FETCH_USER';
export const FETCH_PROFESSIONS = 'FETCH_PROFESSIONS';
export const FETCH_PROFESSION = 'FETCH_PROFESSION';

const ROOT_URL = 'http://localhost:2403';
// const ROOT_URL = 'file:///Users/mak/Desktop/ReactMeteor/users/src/components/data.json';
const API_KEY = '';
console.log(ROOT_URL);

//fetch users from url
export function fetchUsers() {
  const request = axios.get(`${ROOT_URL}/users`);

  return {
    type: FETCH_USERS,
    payload: request
  };
}

//fetch user profile from url
export function fetchUser(id) {
  const request = axios.get(`${ROOT_URL}/users/${id}`);

  return {
    type: FETCH_USER,
    payload: request
  };

}

//fetch professions from url
export function fetchProfessions() {
  const request = axios.get(`${ROOT_URL}/professions`);

  return {
    type: FETCH_PROFESSIONS,
    payload: request
  }
}

//fetch individual profession
export function fetchProfession(id) {
  const request = axios.get(`${ROOT_URL}/professions/${id}`);

  return {
    type: FETCH_PROFESSION,
    payload: request
  }
}
