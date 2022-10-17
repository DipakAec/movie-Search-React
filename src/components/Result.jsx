import React from 'react'
import { Box } from './Box'

const Result = (props) => {
    
    const boxes = props.movies.map(
        (item ,index) => {
            return <Box key={index} image={item.poster_path} title={item.original_title} 
            rating={item.vote_average} relise={item.release_date} language={item.original_language}/>
        }
    )

  return (
    <div className='w-full grid md:grid-cols-4 gap-5 pt-4' id='result'>
       {boxes}
    </div>
  )
}

export default Result