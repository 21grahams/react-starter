// // class component
// import React from 'react';

// class Search extends React.Component {
//   constructor(props) {
//     super(props);


//     this.state = {

//     }

//     this.handleChange = this.handleChange.bind(this);
//     this.buttonSearchClick = this.buttonSearchClickbind(this);
//   }

//     // For Search Movies
//     handleChange(event) {
//       this.setState({searchTerm: event.target.value})
//     }

//     // For Submit Go! Button
//     buttonSearchClick(event) {
//       event.preventDefault();

//       const currentMovie = this.state.movies.filter((movie, i) => {
//         return movie.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
//       })
//       if (currentMovie.length > 0) {
//         this.setState({
//           movies: currentMovie
//         })
//        } else {
//         this.setState({
//           movies : [{title: 'No movies by this name. Please try again'}]
//         })
//       }
//     }


//   render() {
//     return (


//       <div>
//         <form
//           onSubmit={this.buttonSearchClick}>
//           <input
//             className='search'
//             type='text'
//             value={this.state.value}
//             onChange={this.handleChange}
//             placeholder='Search Movies...'>
//           </input>


//           <input
//             className='button'
//             type='submit'
//             value='Go!'>
//           </input>

//         </form>
//       </div>

//     )
//   }
// }

// export default Search;