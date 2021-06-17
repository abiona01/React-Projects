import React from "react";
import "./index.css";
import { useEffect, useState } from "react";
import Recipe from "./components/Recipe";

function App() {
	const APP_ID = "c1a54287";
	const APP_KEY = "4636bd64a11e051af04bd6a87c73dd15";

	const [recipes, setRecipes] = useState([]);
	const [search, setSearch] = useState("");
	const [query, setQuery] = useState("banana");

	useEffect(() => {
		getRecipes();
	}, [query]);

	const getRecipes = async () => {
		const response = await fetch(
			`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
		);
		const data = await response.json();
		setRecipes(data.hits);
		console.log(data.hits);
	};
	const onChange = (e) => {
		const value = e.target.value;
		setSearch(value);
	};
	const onSubmit = (e) => {
		e.preventdefault();
		setQuery(search);
	};
	return (
		<div className="App">
			<form className="search-form" onSubmit={onSubmit}>
				<input
					type="text"
					className="search-bar"
					value={search}
					onChange={onChange}
				/>
				<button type="submit" className="search-button">
					Search
				</button>
			</form>
			{recipes.map((recipe) => (
				<Recipe
					key={recipe.recipe.label}
					title={recipe.recipe.label}
					calories={recipe.recipe.calories}
					image={recipe.recipe.image}
					ingredient={recipe.recipe.ingredient}
				/>
			))}
		</div>
	);
}

export default App;
