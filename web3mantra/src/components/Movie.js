const Movie = (props) => {
  return (
    <div className="movie">   
      <img src={props.img} alt={props.alt}/>
      
      <p>{props.title}</p>
      <p>Year :{props.year}</p>
    </div>
  )
}
// default alt,title,img and year if props are not passed
Movie.defaultProps = {
  alt: 'Movie Poster',
  img: 'https://image.tmdb.org/t/p/w780/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg', 
  title: 'Unknown Movie Title', 
  year: 'Unknown Year', 
};

export default Movie