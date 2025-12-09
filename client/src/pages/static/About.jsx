import React from 'react'
import Footer from '../../components/student/Footer'

const About = () => {
  return (
    <div className='min-h-screen bg-white text-gray-800'>
      <div className='md:px-36 px-6 py-16'>
        <div className='max-w-4xl mx-auto'>
          <h1 className='text-3xl md:text-4xl font-bold mb-4'>About StudyMate</h1>
          <p className='text-gray-600 mb-6'>
            StudyMate is a modern learning platform built to help students and educators connect through high-quality courses, hands-on projects and supportive community features. This page is a lightweight template — replace the copy below with your real content.
          </p>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-2'>Our mission</h2>
            <p className='text-gray-600'>We help learners achieve their goals with clear, practical, project-driven courses taught by industry practitioners.</p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-2'>Our values</h2>
            <ul className='list-disc ml-5 text-gray-600'>
              <li>Practical, hands-on learning</li>
              <li>Accessible education for everyone</li>
              <li>Community-driven support</li>
            </ul>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-2'>Get involved</h2>
            <p className='text-gray-600'>If you're an educator interested in publishing courses, check the Educator Dashboard once you're signed in.</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
