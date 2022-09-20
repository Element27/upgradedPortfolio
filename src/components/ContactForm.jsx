import React from 'react'

function ContactForm() {
  return (
    <div className='w-full h-[75vh] flex flex-col justify-center items-center lg:items-start p-6 lg:p-12'>
      <form className='w-full md:w-[70%] mx-auto p-5 md:p-10 bg-[#ffffff] bg-opacity-5 backdrop-blur-md rounded drop-shadow-lg'>
        <div className='flex flex-col mb-4'>
          <label
            className='font-bold text-sm md:text-base'
            for="formGroupEmail"
          >Email</label>
          <input
            className='w-full md:w-[70%] h-8 p-4 rounded-sm'
            type="email"
            id="formGroupEmail"
            placeholder='Enter Your Email'
          ></input>
        </div>
        {/* Textarea */}
        <div className='flex flex-col'>
          <label
            className='font-bold text-sm md:text-base'
            for="yourMessage"
          >
            Message
          </label>
          <textarea
            className=' w-full h-36 resize-none  p-4 rounded-sm'
            id='formTextarea'
            placeholder='talk to me'
          ></textarea>
        </div>
        <button>Send</button>
      </form>
    </div>
  )
}

export default ContactForm