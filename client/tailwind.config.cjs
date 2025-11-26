/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,html}'
  ],
  safelist: [
    'text-course-deatails-heading-small',
    'md:text-course-deatails-heading-large'
  ],
  // ensure custom maxWidth and boxShadow utilities are emitted
  // (Tailwind generates `max-w-<key>` and `shadow-<key>` classes)
  safelist: [
    'text-course-deatails-heading-small',
    'md:text-course-deatails-heading-large',
    'max-w-course-card',
    'shadow-custom-card'
  ],
  theme: {
    extend: {
      fontSize: {
        'course-deatails-heading-small' : ['26px', '36px'],
        'course-deatails-heading-large' : ['36px', '44px'],
        'home-heading-small' : ['28px', '34px'],
        'home-heading-large' : ['48px', '56px'],
        'defult' : ['15px', '21px']
      },
      gridTemplateColumns: {
        'auto' : 'repeat(auto-fit, minmax(200px, 1fr))'
      },
      spacing: {
        'section-height' : '500px',
      },
      maxWidth: {
        'course-card' : '424px'
      },
      boxShadow: {
        'custom-card' : '0px 4px 15px 2px rgba(0, 0, 0, 0.1)'
      }
    },
  },
  plugins: [],
}
