import './App.css';
import Header from './components/Header';
import Movie from './components/Movie';
import movies from './movies.json'
function App() {
  let login=true;  
  return (
    <div  className="App"> 
    {
      (()=>{
        if(login){
          return <h4 style={{padding:'10px', fontWeight:200}}>Latest movies</h4>
        }
        else{
          return <h4>Old Movies</h4>
        }
          }
      )()
    }      
      <Header/>
      {
        login==true ? <h4 style={{padding:'10px', fontWeight:200}}>Latest movies</h4> : <h4>Old Movies</h4>
      } 
        <div className='main'>         
          { movies.map((element, index)=>{
             return (
              <Movie
                key={index}
                title={element.Title}
                year={element.Year}
                img={element.Poster}
              />
            )
          })}
       </div>
    </div>
  );
}
export default App;
