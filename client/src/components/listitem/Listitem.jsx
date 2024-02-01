import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@mui/icons-material';
import './Listitem.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListItem = ({ index, item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get(`https://netflix-analytics-4u5n.vercel.app/api/movies/find/${item}`, {
          headers: {
            token : `Bearer ` + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setMovie(res.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };
    getMovie();
  }, []);

  if (!movie) {
    return <div>Loading...</div>;
  }
// console.log("movie",movie);
  return (
    // <Link to={{ pathname: '/watch', state: { movie: movie } }}>
    //   <div
    //     className={`listItem ${isHovered ? 'hovered' : ''}`}
    //     onMouseEnter={() => setIsHovered(true)}
    //     onMouseLeave={() => setIsHovered(false)}
    //   >
    //     {movie.img ? (
    //       <img src={movie.img} alt={movie.title} />
    //     ) : (
    //       <div>No Image</div>
    //     )}
    //     <div className='itemInfo'>
    //       <div className='icons'>
    //         <PlayArrow className='icon' />
    //         <Add className='icon' />
    //         <ThumbUpAltOutlined className='icon' />
    //         <ThumbDownAltOutlined className='icon' />
    //       </div>
    //       <div className='itemInfoTop'>
    //         <span>{movie.duration}</span>
    //         <span className='limit'>+{movie.limit}</span>
    //         <span>{movie.year}</span>
    //       </div>
    //       <div className='desc'>{movie.desc}</div>
    //       <div className='genre'>{movie.genre}</div>
    //     </div>
    //   </div>
    // </Link>
    <div className="wrapper">
        <section id="section1">
            <div
              className={`item ${isHovered ? 'hovered' : ''}`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Link to={{ pathname: '/watch', state: { movie: movie } }}>
                {movie.img ? (
                  <img src={movie.img} alt={movie.title} />
                ) : (
                  <div>No Image</div>
                )}
                {/* <h1 className="heading">{movie.title}</h1>
                <p className="duration">{movie.duration}</p> */}
              </Link>
            </div>
        </section>

        {/* Repeat similar structure for other sections */}
      </div>
  );
};

export default ListItem;
