import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const TicketDetails = () => {

  const [loading,setLoading] = useState(true)
  const [ticketData,setTicketData] = useState({})
  const token = localStorage.getItem("token")
  const {id} =useParams()

  console.log(id);

  async function  getTicketDetails(params) {
    try {
      const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/tickets/:${id}`,{
        method:"GET",
        headers:{
          "Content-Type": "application/json",
          "authorization":`Bearer ${token}`
        }
      })
      const data = await res.json()
      const ticket = data.ticket
      setTicketData(ticket)
      console.log("ticket",data);
      
    } catch (error) {
      
    }
  }

  useEffect(()=>{
    getTicketDetails()
  },[])

  return (
    <div className='bg-zinc-800 flex flex-col items-center h-[93vh]'>
      <h1 className='text-center font-semibold text-4xl mt-10 mb-15'>Doubt</h1>

      <div className='w-[80vw] p-10 h-[60vh] rounded-md card shadow-md p-4 bg-gray-800 flex flex-col gap-y-3'>
        <h1 className='text-2xl font-semibold'>TITLE - {ticketData?.title}</h1>
        <h2 className='text-xl'>DESC - {ticketData?.description}</h2>
        <h2 className=''>STATUS - {ticketData?.status}</h2>
        <h2 className='text-xl font-semibold'>HELPFUL-NOTES  {ticketData?.helpfulNotes}</h2>
        <h2>PRIORITY -{ticketData?.priority}</h2>
        <h2 className='font-bold'>SKILLS</h2>
          <div className='flex gap-5'>
            {ticketData?.relatedSkills?.map((skill,index)=>(<p className='btn btn-primary' key={index}>{skill}</p>))}
          </div>
      </div>
      
    </div>
  )
}

export default TicketDetails