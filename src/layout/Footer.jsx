import { Link } from "react-router-dom";
import { routeInfo } from "../helpers/constants";

function Footer() {
  return (
    <div className="bg-yellow-200 flex justify-evenly">
      {routeInfo.map(({ name, path }, index) => (
        <Link key={index} to={path}>
          {name}
        </Link>
      ))}
    </div>
  );
}

export default Footer;
