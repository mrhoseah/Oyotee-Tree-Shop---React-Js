import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="shop">shop</Link>
      </nav>
    </div>
  );
}
export default HomePage