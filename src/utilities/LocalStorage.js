const getStoredBooks = () => {
  const storedBooks = localStorage.getItem("Books");
  if (storedBooks) {
    return JSON.parse(storedBooks);
  }
  return [];
};

const saveBooksCart = (id) => {
  const storedBooks = getStoredBooks();
  const exists = storedBooks.find((jobId) => jobId === id);
  if (!exists) {
    storedBooks.push(id);
    localStorage.setItem(
      "Books",
      JSON.stringify(storedBooks)
    );
  }
};

export { getStoredBooks,saveBooksCart };
