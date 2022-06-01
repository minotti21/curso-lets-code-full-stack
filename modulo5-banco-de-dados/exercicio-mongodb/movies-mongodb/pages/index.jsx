const URL = process.env.BASE_URL;

export default function Home({ movies: moviesArray }) {
  return (
    <div className="container">
      <h1>2010 movies</h1>
      <ul>
        { moviesArray.map((movie, index) => {
          return <li key={index}>{ movie.title }</li>;
        }) }
      </ul>
    </div>
  )
}

export async function getServerSideProps() {
  const response = await fetch(URL + "api/movies");
  const movies = await response.json();

  return {
    props: { movies }
  }
}
