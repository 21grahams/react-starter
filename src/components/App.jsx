import React from 'react';
import MovieList from './MovieList.jsx';
import MovieTitles from './MovieTitles.jsx';
import '../main.css'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [
        {title: 'Mean Girls'},
        {title: 'Dodgeball'},
        {title: 'Avengers: Endgame'},
        {title: 'Thor'},
        {title: 'Titanic'}
      ],
      search: '',
      isToggleOn: true,
      add: ''
    };

    this.handleButtonChange = this.handleButtonChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addMovies = this.addMovies.bind(this);
    this.handleMovieSubmit = this.handleMovieSubmit.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleButtonChange(event) {
    this.setState({search : event.target.value})
    // console.log(event.target.value)
  }

  handleSubmit(event) {
    event.preventDefault();
    const currentMovie = this.state.movies.filter((movie, i) => {
      return movie.title.toLowerCase().includes(this.state.search.toLowerCase())
    })
    if (currentMovie.length > 0) {
      this.setState({
        movies : currentMovie,
        search: ''
      })
    } else {
      this.setState({movies : [{title : 'No Movies By That Title. Please Try Again...'}], search: ''}) // how to go back to main page? Some sort of refresh?
    }
  };



  handleMovieSubmit(event) {
    this.setState({ add : event.target.value})
    // console.log(event.target.value)
  };

  addMovies(event) {
    event.preventDefault();
    console.log('event:');
    var newMovie = {title : this.state.add}
    var newFilms = this.state.movies.slice();
    newFilms.push(newMovie)
    this.setState({movies : newFilms, add: ''})

    console.log(newFilms)
  }


  handleToggle() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }



  render() {
    return (

      <div>
        {/* search bar (go) */}
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              className='searchBar'
              text='text'
              value={this.state.search}
              onChange={this.handleButtonChange}
              placeholder='Search Movies...'>
            </input>
            <input
              className='goButton'
              type='submit'
              value='Go!'
              onClick={this.handleSubmit}>
            </input>
          </label>
        </form>

        {/* add movie (add) */}
        <form onSubmit={this.addMovies}>
          <label>
            <input
              className='addBar'
              text='text'
              value={this.state.add}
              onChange={this.handleMovieSubmit}
              placeholder='Add Movies...'>
            </input>
            <input
              className='addButton'
              type='submit'
              value='Add!'
              onClick={this.addMovies}>
            </input>
          </label>
        </form>
        <button onClick={this.handleToggle}>
          {this.state.isToggleOn ? 'WATCHED' : 'NOT YET'}
        </button>

        <MovieList films={this.state.movies}/>
      </div>
    )
  }
}



export default App;