import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-yellow-200 flex justify-evenly">
      <h1>Footer</h1>
      {/* {routeInfo.map(({ name, path }, index) => (
        <Link key={index} to={path}>
          {name}
        </Link>
      ))} */}
    </div>
  );
}

export default Footer;
