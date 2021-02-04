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

      filteredResults: [],

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
    const currentMovie = this.state.movies.filter(currentMovie =>
       currentMovie.title.toLowerCase() == this.state.searchTerm.toLowerCase()
    )
    console.log(currentMovie, 'currentMovie')
      this.setState({
        movies: currentMovie,
    })
  }

  render() {
    console.log('AFTER RENDER: ', this.state.filteredResults);
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