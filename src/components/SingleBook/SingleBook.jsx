
import PropTypes from 'prop-types';

const SingleBook = ({ items }) => {
    console.log(items);
    const {image,bookName,author,tags,totalPages,yearOfPublishing,publisher,category,rating}=items
    return (
      <div>
        <div className="card card-side bg-base-100 shadow-xl mb-12 p-12">
          <figure>
            <img className="h-36" src={image} alt="Movie" />
          </figure>
          <div className="p-8">
            <h2 className="card-title mb-2">{bookName}</h2>
            <p className=" mb-2">By: {author}</p>
            <div className="flex justify-between gap-2">
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
              <p className='mb-2'>Year of Publish: {yearOfPublishing}</p>
            </div>
            <div className="flex justify-between gap-2">
              <p>Publisher: {publisher}</p>
              <p>Page: {totalPages}</p>
            </div>
            <div className="flex justify-between gap-2">
              <p>Category : {category}</p>
              <p>Rating: {rating}</p>
              <button className="btn btn-accent gap-2">View Details</button>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
      </div>
    );
};

SingleBook.propTypes = {
    items:PropTypes.object
};

export default SingleBook;