import { useEffect, useState } from "react";
import Books from "../Books/Books";


const BookList = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch("books.json")
            .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    return (
      <div>
        <h1 className="text-center text-2xl font-bold">Books</h1>
        <div className="grid p-8 md:grid-cols-3 gap-6">
          {books.map((book) => (
            <Books key={book.bookId} book={book}></Books>
          ))}
        </div>
      </div>
    );
};

export default BookList;