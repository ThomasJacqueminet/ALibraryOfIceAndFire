import axios from "axios";

export async function getThreeFirstCharacters(book) {
    const bookCharacters = book.characters.slice(0, 3)
    const requestOne = axios.get(bookCharacters[0]);
    const requestTwo = axios.get(bookCharacters[1]);
    const requestThree = axios.get(bookCharacters[2]);
    return axios.all([requestOne, requestTwo, requestThree])
}

export async function getThreeNextCharacters(index, book) {
    const nextBookCharacters = book.characters.slice(index, index+3)
    const requestOne = axios.get(nextBookCharacters[0]);
    const requestTwo = axios.get(nextBookCharacters[1]);
    const requestThree = axios.get(nextBookCharacters[2]);
    return axios.all([requestOne, requestTwo, requestThree])
}