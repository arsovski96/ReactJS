import "./MoviesList.css";

const MoviesList = () => {
  const movies = [
    { id: 1, title: "The little mermaid", year: "2023" },
    { id: 2, title: "Fast X", year: "2023" },
    { id: 3, title: "The super mario bros", year: "2023" },
    { id: 4, title: "John Wick", year: "2023" },
    { id: 5, title: "White men can't jump", year: "2023" },
    { id: 6, title: "Air", year: "2023" },
    { id: 7, title: "Ant-Man", year: "2023" },
    { id: 8, title: "The Mother", year: "2023" },
    { id: 9, title: "Blackberry", year: "2023" },
    { id: 10, title: "Sanctuary", year: "2023" },
  ];

  return (
    <div className="movies">
      <h1>Welcome to the Movie Library App</h1>
      <p>Top 10 movies for you!</p>
      <hr />
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.title} {movie.year}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
