import React from "react";

function Recipe({ title, calories, image, ingredient }) {
	return (
		<div>
			<h1>{title}</h1>
			<ol></ol>
			<p>{calories}</p>
			<img src={image} alt=" " />
		</div>
	);
}

export default Recipe;
