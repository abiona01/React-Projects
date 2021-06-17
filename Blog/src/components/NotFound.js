import { Link } from "react-router-dom";

function NotFound() {
	return (
		<div className="not-found">
			<h2>Man down!</h2> <p>Sorry, but you can't find him here</p>
			<div>
				<Link to="/">Back to homepage</Link>
			</div>
		</div>
	);
}

export default NotFound;
