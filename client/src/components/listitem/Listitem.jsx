import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@mui/icons-material';
import './ListItem.scss';
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
        const res = await axios.get(`http://localhost:3000/api/movies/find/${item}`, {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ODljZGI0NDBmNjRjMzM4NGY3NjE0YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNTY1NTA2NiwiZXhwIjoxNzA2MDg3MDY2fQ.BYVU_F_4KQD7wFgQPABRxmPhbOZOdpWCW2BmnbTYv-o",
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
    <Link to={{ pathname: '/watch', state: { movie: movie } }}>
      <div
        className={`listItem ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {movie.img ? (
          <img src={movie.img} alt={movie.title} />
        ) : (
          <div>No Image</div>
        )}
        <div className='itemInfo'>
          <div className='icons'>
            <PlayArrow className='icon' />
            <Add className='icon' />
            <ThumbUpAltOutlined className='icon' />
            <ThumbDownAltOutlined className='icon' />
          </div>
          <div className='itemInfoTop'>
            <span>{movie.duration}</span>
            <span className='limit'>+{movie.limit}</span>
            <span>{movie.year}</span>
          </div>
          <div className='desc'>{movie.desc}</div>
          <div className='genre'>{movie.genre}</div>
        </div>
      </div>
    </Link>
  );
};

export default ListItem;
