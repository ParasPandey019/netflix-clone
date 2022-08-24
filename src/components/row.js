import React, {useState, useEffect, useRef} from "react";
import '../stylesheets/row.css';
import axios from "./axios";
import ArrowPrev from '../media/arrowPrev.png';
import ArrowNext from '../media/arrowNext.png';
import Modal from'./modal';
import ReactPlayer from 'react-player/youtube'
import movieTrailer from 'movie-trailer'
import Loader from './loader'







function Row({url, isLargeRow, title}) {

const [movies, setMovies] = useState([]);
const [modal,setModal] = useState(false);
const [modalInfo, setModalInfo] = useState({
  name: '',
  image: '',
  content: ''
});
const [trailerURL, setTrailerURL] = useState('');
const [trailer, setTrailer] = useState(false);
const [loader, setLoader] = useState(false);


const base_url="https://image.tmdb.org/t/p/original/";

useEffect(() =>{
  async function fetchData(){
    const request = await axios.get(url);
    setMovies(request.data.results);
  }

  fetchData();
},[url])

const row = useRef();

const handleclick = (direction) =>{
  if(direction === "left"){
    row.current.scrollBy(-350,0);
  }

  if(direction === "right"){
    row.current.scrollBy(350,0);
  }
}

const toggleModal = (movie) =>{
  setModalInfo({
    name: ('name' in movie ? movie.name : movie.title),
    image: movie?.backdrop_path,
    content: (movie.overview ? movie.overview: " "),
    id: movie.id,
    rating: movie.vote_average,
    date: movie.release_date
  })
  setModal(true);
  if(trailer === true){
    setTrailer(false);
  }

  window.scrollBy(0,350);
}

const closeModal = () =>{
  setModal(false)
  setModalInfo({});
}


const showTrailer = () =>{
  let name = modalInfo.name;
  setLoader(true);
  movieTrailer(name).then((res) =>{
    if(res){
      setTrailerURL(res);
      setTrailer(true); 
      setTimeout(()=>setLoader(false),1000);
    }else{
      alert('module is unable to fetch trailer for this show')
      setLoader(false);
    }
  }).catch((error) =>{alert(error.message)}); 

}

const back = () =>{
  setTrailer(false);
}

const player={
  height: '100%',
  width: '100%'
}


  
  return (
    <div className='rows'>
      <h3 className='rowTitle'>{title}</h3>
      <div className='wrapper'>
        <div ref= {row} className="row_posters">
          {movies.map(movie =>(
            <div  className={`row_image ${isLargeRow && "row_imageLarge"}`}>
              <img ref={modalInfo}  className={`row_poster ${isLargeRow && "row_posterLarge"}`} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} key={movie.id} overview={movie.overview}></img>
              <div className={`image_hover ${isLargeRow && "image_hoverLarge"} hoverContent`}>
                <div className={`hoverText ${isLargeRow && "hoverTextLarge"}`}>
                  <p className='hoverTitle'>{'name' in movie ? movie.name.slice(0,35) : movie.title.slice(0,35)}</p>
                  <p className='hoverOverview'>{movie.overview ? movie.overview.slice(0,60)+"....": " "}</p>
                  <div style={{marginTop:"10px"}} className='rowButtons'>
                      <i onClick = {() => toggleModal(movie)} style={{fontSize:"2rem", marginRight:"5px"}} class="fa-regular fa-circle-play rowButton"></i>
                      <i style={{fontSize:"2rem"}} class="fa-solid fa-circle-plus rowButton"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {modal && <div className='modalPopUp' close={closeModal}>
          <Modal name={modalInfo.name} image={modalInfo.image} content={modalInfo.content} id={modalInfo.id} date={modalInfo.date} rating={modalInfo.rating} trailer={showTrailer} close={closeModal}/>
          {trailer && <div className='trailerContainer'>
            {loader ? <Loader /> :<div className='trailer'>
              <ReactPlayer url={trailerURL} controls={true} height={player.height} width={player.width}/>
              <div onClick={back} className='trailerBackButton'><i class="fa-solid fa-circle-left"></i></div>
              <div onClick={closeModal} className='trailerCloseButton'><i className="fa-regular fa-circle-xmark"></i></div>
            </div>}
          </div>}
          </div>}
        <div onClick={()=>handleclick("left")} className={`prev ${isLargeRow && "prev_Large"}`}>
          <img  src={ArrowPrev} className='arrowPrev' alt =''></img>
        </div>
        <div  onClick={()=>handleclick("right")} className={`next ${isLargeRow && "next_Large"}`}>
          <img src={ArrowNext} className='arrowNext' alt =''></img>
        </div>
      </div>
    </div>
  )
}

export default Row;