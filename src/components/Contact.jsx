
import app from './models/FirebaseInstance'
import { getFirestore, collection, addDoc,doc, setDoc } from 'firebase/firestore'
import React from 'react'

export default function Contact() {
  const db = getFirestore(app)


  const appData = async (name, email, subject, message) => {

    const data = {
      name: name,
      email: email,
      subject: subject,
      message: message
    }

    await setDoc(doc(db, "Contact", name), data).then(() => {
      setIsSubmit(true)

    }).catch((err) => {
      console.log(err);
    });

  }
  const [u_name, setU_name] = React.useState('')
  const [u_email, setU_email] = React.useState('')
  const [u_subject, setU_subject] = React.useState('')
  const [u_message, setU_message] = React.useState('')
  const [isSubmit, setIsSubmit] = React.useState(false)

  const submitData = () => {
  
    if (u_name === '' || u_email === '' || u_subject === '' || u_message === '') {
      alert('Please fill all the fields')
      return
    }
    setIsSubmit(true)
    setU_email('')
    setU_name('')
    setU_subject('')
    setU_message('')

    appData(u_name, u_email, u_subject, u_message)
  }
  return (
    <div className='w-full h-screen bg-[#0a192f] text-gray-300 justify-center flex items-center'>
      <div className='w-full md:w-1/2 lg:w-1/2 h-full flex flex-col justify-center items-center'>
        <h1 className='text-3xl  m-2 font-bold'>Contact Me</h1>
        <input type="text" value={u_name} onChange={(e) => setU_name(e.target.value)} className='w-4/5 p-2 m-2 text-[#0a192f] rounded-lg' placeholder='Name' />
        <input type="text" value={u_email} onChange={(e) => setU_email(e.target.value)} className='w-4/5 p-2 m-2 text-[#0a192f] rounded-lg' placeholder='Email' />
        <input type="text" value={u_subject} onChange={(e) => setU_subject(e.target.value)} className='w-4/5 p-2 m-2  text-[#0a192f] rounded-lg' placeholder='Subject' />
        <textarea type="text" value={u_message} onChange={(e) => setU_message(e.target.value)} name="text" id="" rows={4} maxLength={250} placeholder='Message' className='w-4/5 h-[100px] text-[#0a192f] p-2 m-2 rounded-lg'></textarea>
        <button onClick={submitData} className='w-4/5 p-2 m-2  rounded-lg bg-sky-500 hover:bg-sky-600'><p className='text-[#0a192f]'>Submit</p></button>

        {
          isSubmit ? <h1 className=' duration-300 w-4/5 p-2 text-md rounded-sm bg-green-50 text-green-400  m-2 text-center'>Thank You For Contacting Me</h1> : null
        }
      </div>
    </div>
  )
}
