import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'

const CourseDetails = () => {

   const {id} = useParams()

   const [courseData, setCoursedata] = useState(null)

   const {allCourses} = useContext(AppContext)

   const fetchCourseData = async ()=>{
     const findCourse = allCourses.find(course => course._id === id)
   }

  return (
    <div>
      <h1>Course Details Page</h1>
    </div>
  )
}

export default CourseDetails
