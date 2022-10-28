import axios from 'axios'

export async function getBooks () {
    return axios.get('https://anapioficeandfire.com/api/books')
    .then((res) => res.data)
    .catch((err) => console.log(err));
}