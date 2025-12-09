import React from 'react'
import Footer from '../../components/student/Footer'

const Privacy = () => {
  return (
    <div className='min-h-screen bg-white text-gray-800'>
      <div className='md:px-36 px-6 py-16'>
        <div className='max-w-4xl mx-auto'>
          <h1 className='text-3xl md:text-4xl font-bold mb-4'>Privacy Policy</h1>
          <p className='text-gray-600 mb-6'>This is a template privacy policy page. Replace the content below with your legal/privacy text that reflects how you collect and process user data.</p>

          <section className='mb-6'>
            <h2 className='text-xl font-semibold mb-2'>Information we collect</h2>
            <p className='text-gray-600'>We collect information you provide directly (account details) and technical data required to provide the service.</p>
          </section>

          <section className='mb-6'>
            <h2 className='text-xl font-semibold mb-2'>How we use information</h2>
            <p className='text-gray-600'>We use information to operate, maintain and improve StudyMate, and to communicate with you.</p>
          </section>

          <section>
            <h2 className='text-xl font-semibold mb-2'>Contact</h2>
            <p className='text-gray-600'>If you have questions about this policy, email <a className='text-blue-600 underline' href='mailto:madusankakeshan782@gmail.com'>madusankakeshan782@gmail.com</a>.</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Privacy
