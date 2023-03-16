import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import "./App.css";
import AddMovies from "./components/AddMovies/AddMovies";
import MoviesList from "./components/List/MoviesList";
import Filter from "./components/search/Filter";
import { Route, Routes } from "react-router-dom";
import Descriptions from './components/Descriptions';


function App() {
  const [keyWords, SetKeyWords] = useState("");
  const [rating, setRating] = useState(1);

  const [AllMovies, setAllMovies] = useState([
    {
      title: "le parrain  ",
      id : uuidv4(),
      imgs: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
      description:
        "En 1945, à New York, les Corleone sont une des cinq familles de la mafia. Don Vito Corleone marie sa fille à un bookmaker...",
      rate: "5",
      url:"https://www.youtube.com/embed/rqGJyUB1Q3s",
    },
    {
      title: "Carter",
      id : uuidv4(),
      imgs: "https://m.media-amazon.com/images/M/MV5BNWEyOThlZTAtMzExMy00NDBhLTk4Y2QtMDg3OTRkNzgyNjEyXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_FMjpg_UX1000_.jpg",
      description:
        "Un homme se réveille amnésique. Guidé par une mystérieuse voix provenant d un dispositif placé dans son oreille ...",
      rate: "4",
      url:"https://www.youtube.com/embed/ulPHag30btQ",
    },
    {
      title: " Gladiator",
      id : uuidv4(),
      imgs: "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
      description:
        "Un ancien général romain cherche à se venger de l empereur corrompu qui a assassiné sa famille et condamné à l esclavage.",
      rate: "4",
      url:"https://www.youtube.com/embed/owK1qxDselE",
    },
    {
      title: "Stillwater",
      id : uuidv4(),
      imgs: "https://m.media-amazon.com/images/M/MV5BMDFlZWJmMjMtMmE0ZC00ZGY3LTg4ZTYtNWRjNDYzZjY0MjA1XkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
      description:
        "Un homme se rend de l Oklahoma jusqu en France pour aider sa fille emprisonnée pour un meurtre qu elle dit ne pas avoir commis...",
      rate: "3",
      url:"https://www.youtube.com/embed/FfalESJsRZA",
    },
    {
      title: "Nobody",
      id : uuidv4(),
      imgs: "https://m.media-amazon.com/images/M/MV5BYmU1Y2U0M2EtYjM1YS00MWVjLTg2NzAtMzMwZDdkNjI4ZTY4XkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_.jpg",
      description:
        "Victime d un cambriolage, un père de famille modèle se révèle être un ancien tueur de la CIA... En cherchant a se venger...",
      rate: "4",
      url:"https://www.youtube.com/embed/HMxUY_rJVLY",
    },

    {
      title: "Troll",
      id : uuidv4(),
      description:
        "Au fond de la montagne de Dovre, quelque chose de gigantesque se réveille après avoir été piégé pendant mille ans...",
      imgs: "https://fr.web.img5.acsta.net/pictures/22/12/01/09/39/4775456.jpg",

      rate: 3,
      url:"https://www.youtube.com/embed/AiohkY_XQYQ",
    },
    {
      title: "We Have a Ghost",
      id : uuidv4(),
      description:
        "Finding a ghost named Ernest haunting their new home turns Kevin's family into overnight social media sensations...",
      imgs:"https://m.media-amazon.com/images/M/MV5BODcxMDFkOTQtN2YzYS00YjkxLWFhMDUtMDc5ZmU4YmE4YWRmXkEyXkFqcGdeQXVyMTA1OTcyNDQ4._V1_.jpg",
        rate: 3,
      url:"https://www.youtube.com/embed/82I1ErFD63U",
    },
    {
      title: "Salyut 7",
      id : uuidv4(),
      description:
        "A space capsule crash-lands on Earth, and the astronaut aboard disappears. Is there a connection between the missing man ...",
      imgs:"https://m.media-amazon.com/images/M/MV5BOWM4ZjFjNzktZjQ4My00ZjdiLWI4OWEtMDFmNjkyODk0MWRiXkEyXkFqcGdeQXVyNDY3MTQwMzk@._V1_.jpg",
      rate: 5,
      url:"https://www.youtube.com/embed/bKOy2qE9mEE",
    },
    {
      title: " The Siege ",
      id : uuidv4(),
      description:"A special agent (Daniel Stisen, Netflix's Last Man Down) must defend his agency's compound when it comes under attack...",
imgs:"https://i.ytimg.com/vi/mOmFcuvL3EY/maxresdefault.jpg",
        rate: 2,
      url:"https://www.youtube.com/embed/mOmFcuvL3EY",
    },
    {
      title: "THE SIEGE",
      id : uuidv4(),
      description:
        "Barely 21 yet, Frank is a skilled forger who has passes as a doctor, lawyer and pilot.FBI agent Carl becomes obsessed with tracking down the con man, who only revels in the pursuit.",
      imgs: "https://images-na.ssl-images-amazon.com/images/I/81V%2Bb69u3xL._SY445_.jpg",
      Rating: 3,
      url:"https://www.youtube.com/embed/UrIbxk7idYA",
    },

    {
      title: "300",
      id : uuidv4(),
      description:
        "King Leonidas of Sparta and a force of 300 legendary men fight the Persians at Thermopylae in 480 B.C. and more ...",
      imgs: "https://m.media-amazon.com/images/M/MV5BMTg0NzcxNzYzM15BMl5BanBnXkFtZTcwODI4MTI2MQ@@._V1_.jpg",
      TrailerUrl: "https://www.youtube.com/embed/UrIbxk7idYA",
      rate: 5,
      url:"https://www.youtube.com/embed/UrIbxk7idYA",
    },
  ]);
  const addNewMovie = (newMovie) => {
    setAllMovies([...AllMovies, newMovie]);
  };
  const seachMov = (text) => {
    SetKeyWords(text);
  };
  const rateMovies = (num) => {
    setRating(num);
  };

  return (
    <div className="App">
      <Routes>
        <Route path='/' element ={
          <div>

<AddMovies addNewMovie={addNewMovie}></AddMovies>
<Filter seachMov={seachMov} rateMovies={rateMovies}></Filter>
<MoviesList
  AllMovies={AllMovies.filter(
    (elm) =>
      elm.title.toLowerCase().includes(keyWords.toLowerCase().trim()) &&
      elm.rate >= rating
  )}
></MoviesList>
</div>


        }/>
       <Route path='/Descriptions/:id'  element={<Descriptions AllMovies={AllMovies}></Descriptions>}></Route>
        </Routes>
       
    </div>
  );
}

export default App;
