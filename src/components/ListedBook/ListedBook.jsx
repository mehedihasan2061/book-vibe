import { useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredBooks } from "../../utilities/LocalStorage";
import SingleBook from "../SingleBook/SingleBook";


const ListedBook = () => {
  const books = useLoaderData()
  const [tabIndex, setTabIndex] = useState(0);
  const [bookList, setBookList] = useState([])
  // const [displayBooks,setDisplayBooks]=([])
  // console.log(books);
  // const handleBooksFilter = (filter) => {
  //   if (filter === 'all') {
  //     setDisplayBooks(bookList)
  //   }
  //   else if (filter === 'page') {
  //     const pages = bookList.filter((page) => page.totalPages < 400);
  //     setDisplayBooks(pages)
  //   }
  // }
  useEffect(() => {
    const storedBooksId = getStoredBooks()
    // console.log(storedBooksId);
    if (books.length > 0) {
      const listedBooks = [];
      for (const id of storedBooksId) {
        console.log(id);
        const book = books.find((book) => book.bookId === id);
        listedBooks.push(book)
      }
      // console.log(listedBooks);
      setBookList(listedBooks)
    }
    // setDisplayBooks(bookList)
    // console.log(bookList);
  },[books])

    // console.log(displayBooks);
    return (
      <div>
        <p className="text-center bg-gray-300 p-2 rounded-xl text-2xl font-bold">
          Books
        </p>
        {/* Dropdown  */}

        <details className="dropdown left-[46%] my-8">
          <summary className="m-1 btn bg-green-600 text-white">
            Sort By <RiArrowDropDownLine className="text-xl" />
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a>All</a>
            </li>
            <li >
              <a>Pages</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </details>

        {/* Dropdown  */}

        <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:bg-gray-100 dark:text-gray-800">
          <Link
            onClick={() => setTabIndex(0)}
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
              tabIndex === 0 ? "border border-b-0" : "border-b"
            } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
            <span>Read</span>
          </Link>

          <Link
            onClick={() => setTabIndex(1)}
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
              tabIndex === 1 ? "border border-b-0" : "border-b"
            } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
            <span>Wishlist</span>
          </Link>
        </div>
        <div>
          <h1>BookList: {bookList.length}</h1>
          {bookList.map((items) => (
            <SingleBook key={items.bookId} items={items}></SingleBook>
          ))}
        </div>
      </div>
    );
};

export default ListedBook;