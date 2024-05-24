
import PropTypes from 'prop-types';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Books = ({ book }) => {
    const {bookId, image, bookName, author, category, rating, tags } = book;
    console.log(tags);
    return (
      <Link to={`/book/${bookId}`}>
        <div className=" grid grid-rows-3 grid-flow-col gap-4">
          <div className="card card-compact bg-base-100 shadow-xl row-span-3">
            <figure>
              <img className="h-64 rounded-xl" src={image} alt="Shoes" />
            </figure>
            <div>
              <p className='my-1'>
                {" "}
              
                {tags.map((tag) => (
                  <span
                    key={tag.bookId}
                    className="bg-green-200 text-green-700 p-1 m-3 text-[12px] rounded-xl "
                  >
                    {" "}
                     {tag}{" "}
                  </span>
                ))}
              </p>
            </div>
            <div className="card-body  ">
              <h2 className="card-title text-xl font-bold"> {bookName}</h2>
              <p>By: {author}</p>
              <div className=" border-dashed border-b-2"></div>
              <div className="flex  row-span-3 ">
                <p>{category}</p>
                <div>
                  <p className="flex items-center gap-2">
                    {rating} <FaRegStar></FaRegStar>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
};

Books.propTypes = {
    book:PropTypes.object
};

export default Books;