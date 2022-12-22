import React from 'react'
import HotTopic from '../components/BlogPage/HotTopic'
import Trending from '../components/BlogPage/Trending'
import Latest from '../components/BlogPage/Latest'



const Blog = () => {
  return (
    <div className='text-orange-500'>
        <HotTopic/>
        <Trending/>
        <Latest/>
    </div>
  )
}

export default Blog