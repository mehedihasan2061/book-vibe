import {  useLoaderData, useParams } from "react-router-dom";
import { saveBooksCart } from "../../utilities/LocalStorage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const BookDetails = () => {
  const books = useLoaderData();
  console.log(books);
    const {id} = useParams()
    const idx = parseInt(id)
    const book=books.find((item) => item.bookId === idx)
    
    const { image, bookName, author, description, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;
    
    const handleRead = () => {
      saveBooksCart(idx)
      toast("Added Successfully");
        
  }
  const handleWishlist = () => {
    saveBooksCart(idx)
    toast("WishList Book Added Successfully");
    }
    return (
      <div>
        <div className="card card-side bg-gray-50 shadow-xl mb-16 flex flex-col md:flex-row">
          <figure>
            <img className="h-full " src={image} alt="Movie" />
          </figure>
          <div className="p-6">
            <h2 className="card-title text-3xl font-bold">{bookName}!</h2>
            <p className="font-bold">By: {author}</p>
            <div className=" border-dashed border-b-2"></div>
            <h4 className="font-semibold">{category}</h4>
            <div className=" border-dashed border-b-2"></div>
            <p className="my-2">
              {" "}
              <span className="font-bold"> Review:</span>
              <span> {description}</span>
            </p>
            <div>
              <p>
                {" "}
                Tag:
                {tags.map((tag) => (
                  <span
                    key={tag.bookId}
                    className="bg-green-200 text-green-700 p-1 m-3 rounded-xl "
                  >
                    {" "}
                    # {tag}{" "}
                  </span>
                ))}
              </p>
            </div>
            <div className=" border-dashed border-b-2 my-3"></div>
            <p>
              <span className="text-gray-500">Number of Pages: </span>
              <span className="font-bold">{totalPages}</span>
            </p>
            <p>
              <span className="text-gray-500"> Publisher: </span>
              <span className="font-bold">{publisher}</span>
            </p>
            <p>
              <span className="text-gray-500">Year of Publishing: </span>{" "}
              <span className="font-bold">{yearOfPublishing}</span>
            </p>
            <p>
              <span className="text-gray-500">Rating: </span>{" "}
              <span className="font-bold">{rating}</span>
            </p>
            <div className="card-actions my-6 ">
              <div>
                <button
                  onClick={handleRead}
                  className="btn btn-outline btn-primary"
                >
                  Read
                </button>

                <ToastContainer></ToastContainer>
              </div>

              <div>
                <button onClick={handleWishlist} className="btn btn-accent">Wishlist</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default BookDetails;