import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="container-fluid">
      <h4 className="text-danger text-center">Path not Exist</h4>
      <Link to="/">Back to HomePage</Link>
    </div>
  );
}
