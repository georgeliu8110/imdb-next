import Image from 'next/image';
import Trailer from '../../../components/Trailer';

export default async function MoviePage({params}) {
  console.log('params', params)
  const movieId = params.id
  const movie_url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`;
  const video_url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.API_KEY}`;

  const [ res_movie, res_video ] = await Promise.all([ fetch(movie_url), fetch(video_url) ]);
  const [ movie, video ] = await Promise.all([ res_movie.json(), res_video.json() ]);

  const video_key = video.results[0]?.key;

   return (
    <div className='w-full'>
      <div className='p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6'>
        <Image className='rounded-lg' src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`} width={500} height={300} alt="" style={{maxWidth:'100%', height: '100%'}}>
        </Image>
        <div className='p-2'>
          <h2 className='text-lg mb-3 font-bold'>
            {movie.title || movie.name}
          </h2>
          <p className='text-lg mb-3'>
            {movie.overview}
          </p>
          <p className='mb-3'>
            <span className='font-semibold mr-1'>Date Released: </span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className='mb-3'>
          <span className='font-semibold mr-1'>Rating: </span>
            {movie.vote_count}
          </p>
          <p>
            <Trailer video_key={video_key}/>
          </p>
        </div>
      </div>
    </div>
  )
}