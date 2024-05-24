import { Link } from "react-router-dom";
import banner from "../../assets/pngwing 1.jpg"

const Banner = () => {
    return (
      <div>
        <div className="card card-side bg-base-100 shadow-xl p-8  flex flex-col lg:flex-row">
          <div className="card-body ">
            <h2 className="card-title md:text-4xl lg:w-1/2 font-bold ">
              Books to freshen up your bookshelf
            </h2>

            <div className="card-actions">
              <Link to="/books">
                {" "}
                <button className="btn btn-success ">View The List</button>
              </Link>
            </div>
          </div>
          <figure>
            <img className="w-32 md:w-56" src={banner} alt="Movie" />
          </figure>
        </div>
      </div>
    );
};

export default Banner;