import React from 'react';


class AddMovies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addMovieTitle : ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
  }


  handleChange(event) {
    this.setState({addMovieTitle: event.target.value})
  }


  handleAddClick(event) {
    event.preventDefault();
    var newObj = {title: this.state.addMovieTitle}
    this.props.addMovies(newObj);
    this.setState({addMovieTitle: ''})
  }


  render() {
    return (

      <div>

        <form
          onSubmit={this.handleAddClick}>
          <input
            className='addMovieForm'
            type='text'
            value={this.state.addMovieTitle}
            placeholder='Add Movies Here...'
            onChange={this.handleChange}>
          </input>
          <input
            className='addMovieButton'
            type='submit'
            value='Add!'>
          </input>
        </form>

      </div>

)};
}




export default AddMovies;