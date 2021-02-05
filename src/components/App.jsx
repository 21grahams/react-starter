import React from 'react';
import MoviesList from './MoviesList.jsx'
import '../main.css'
import Search from './Search.jsx'
import AddMovies from './AddMovies.jsx'



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      movies: [],
      searchTerm: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.addMovies = this.addMovies.bind(this);
  }


  handleChange(event) {
    this.setState({searchTerm: event.target.value})
  }


  handleSearchClick(event) {
    event.preventDefault();

    const currentMovie = this.state.movies.filter((movie, i) => {
      return movie.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })
    if (currentMovie.length > 0) {
      this.setState({
        movies: currentMovie
      })
     } else {
      this.setState({
        movies : [{title: 'No movies by this name. Please try again'}]
      })
    }
  }

  addMovies(newObj) {

    var newFilms = this.state.movies.slice();
    newFilms.push(newObj);
    this.setState({ movies : newFilms})
  }


  render() {
    return (

      <div>

        <form
          onSubmit={this.handleSearchClick}>
          <input
            className='searchForm'
            type='text'
            value={this.state.searchTerm}
            onChange={this.handleChange}
            placeholder='Search Movies...'>
          </input>

          <input
            className='searchButton'
            type='submit'
            value='Go!'>
          </input>
        </form>

      <AddMovies addMovies={this.addMovies}/>
      <MoviesList movies={this.state.movies}/>

    </div>

  )};
};

export default App;