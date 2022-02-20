import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: []
  }

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
    this.setState({ movies, isLoading: false })

  }

  componentDidMount() {
    this.getMovies()
  }

  renderMovie(mov) {
    return <Movie 
            key={mov.id}
            id={mov.id}
            year={mov.year}
            title={mov. title}
            summary={mov.summary}
            poster={mov.medium_cover_image}
            genres={mov.genres}
          />
  }

  render() {
    const { isLoading, movies } = this.state
    return (<section className="container">
      {isLoading
        ? <div className="loader">
          <span className="loader__text">Loading...</span>
        </div> 
        : <div className="movies">
            {movies.map(this.renderMovie)}
          </div>
      }
    </section>)
  }
}

export default Home;
