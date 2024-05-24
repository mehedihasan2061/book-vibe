import { Link, useRouteError } from "react-router-dom";
import img from "../../assets/6983265.webp"

const ErrorPage = () => {
    const error=useRouteError()
    return (
      <div>
        <img className="w-72 mx-auto" src={img} alt="" />
        <div className="text-center">
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
          <Link to="/">
            <button className="btn btn-primary">Go Back</button>
          </Link>
        </div>
      </div>
    );
};

export default ErrorPage;