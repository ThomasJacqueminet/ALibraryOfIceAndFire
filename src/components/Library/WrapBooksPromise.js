import { getBooks } from "../../api/BookApi";

const booksFetch = () => {
    const booksPromise = getBooks;
    return {
      books: wrapBooksPromise(booksPromise),
    };
  };
  
  const wrapBooksPromise = (promise) => {
    let status = "pending";
    let result;
    let suspend = promise().then(
      (res) => {
        status = "success";
        result = res;
      },
      (err) => {
        status = "error";
        result = err;
      }
    );
    return {
      read() {
        if (status === "pending") {
          throw suspend;
        } else if (status === "error") {
          throw result;
        } else if (status === "success") {
          return result;
        }
      },
    };
  };
  
  export default booksFetch;