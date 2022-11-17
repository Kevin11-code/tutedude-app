import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="container">
      <div className="text-center font-poppins mt-10 px-32 space-y-5">
        <h2 className="text-7xl font-bold">404</h2>
        <h3 className="text-4xl text-gray-700">UH OH! You're lost.</h3>
        <p className="text-gray-500 text-xl">
          The page you are looking for does not exist. How you got here is a
          mystery. But you can click the button below to go back to the
          homepage.
        </p>

        <NavLink to="/">
          <button className="rounded-full px-4 py-2 bg-new text-white mt-20">
            Go Back to Home
          </button>
        </NavLink>
      </div>
    </div>
  );
};


export default Error;
