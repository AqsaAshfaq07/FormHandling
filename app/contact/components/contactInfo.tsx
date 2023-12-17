"use client"
import React, { FormEvent, useState } from 'react'
import DisplayContact from './displayContact'
import { contactTypes, onChangeEventType } from '@/Types/commonTypes'


export default function ContactInfo() {
  const [contactInfo, setContactInfo] = useState<contactTypes>({    
    name: '',
    email: '',
    phone: 0,
    message: ''
  })

  const OnChangeHandler = (e:onChangeEventType) => {
    let userDetails = {
        ...contactInfo,
        [e.target.name]: e.target.value
    }
    setContactInfo(userDetails)
  }  

  return (
    <>
      <form className="max-w-md mx-auto">
        <div className="mb-4">

          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            onChange={OnChangeHandler}
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            onChange={OnChangeHandler}
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Phone
          </label>
          <input
            onChange={OnChangeHandler}
            type="number"
            id="phone"
            name="phone"
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-3 py-2 border rounded-md"
            required
          ></textarea>
        </div>

        <div className="mb-6">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
      <DisplayContact contactData={contactInfo} />
    </>
  )
}
