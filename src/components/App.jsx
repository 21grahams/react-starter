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
      title: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({title: event.target.value})
  }

  buttonSearchClick() {
    event.preventDefault();
    console.log(this.event.target.value);
  }

  render() {
    return (
      <div>

      <label>
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
          onClick={() => this.buttonSearchClick()}
          value='Go!'>
        </input>
      </label>

      <MoviesList movies={this.state.movies}/>

    </div>

  )};
};

export default App;