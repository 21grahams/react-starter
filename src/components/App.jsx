import React from 'react';
import MoviesList from './MoviesList.jsx'
import '../main.css'
// import Search from './Search.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      movies: [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'},
      ],

      // filteredResults: [],

      searchTerm: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.buttonSearchClick = this.buttonSearchClick.bind(this);
  }

  handleChange(event) {
    this.setState({searchTerm: event.target.value})
  }

  buttonSearchClick(event) {
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

  render() {
    return (
      <div>

        <form
          onSubmit={this.buttonSearchClick}>
          <input
            className='search'
            type='text'
            value={this.state.value}
            onChange={this.handleChange}
            placeholder='Search Movies...'>
          </input>
          <input
            className='button'
            type='submit'
            value='Go!'>
          </input>
        </form>

      <MoviesList movies={this.state.movies}/>

    </div>

  )};
};

export default App;