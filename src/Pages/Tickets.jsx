import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Tickets = () => {

  const token = localStorage.getItem("token")  
  const [tickets,setTickets] =useState([])
  const[loading,setLoading] = useState(false)

  async function getAllTickets (){
    try {    
      const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/tickets`,{
        method:"GET",
        headers:{
          "Content-Type": "application/json",
          "authorization":`Bearer ${token}`
        }
      })
      const data = await res.json()
      console.log("tickets",data);
      setTickets((prev)=>[...prev,...data.tickets])
    } catch (error) {
      console.log(`error in tickets page ${error}`); 
    }
  }

  useEffect(()=>{
  getAllTickets()
  },[])


  return (
    <div className='bg-zinc-800 h-[87vh] p-10'>
      <h2 className="text-xl font-semibold mb-2">All Tickets</h2>
      <div className="space-y-3 h-[70vh] overflow-y-scroll">
        { tickets.length>0 && tickets.map((ticket) => (
          <Link
            key={ticket?._id}
            className="card shadow-md p-4 bg-gray-800"
            to={`/tickets/${ticket?._id}`}
          >
            <h3 className="font-bold text-lg">{ticket?.title}</h3>
            <p className="text-sm">{ticket?.description}</p>
            <p className="text-sm text-gray-500">
              Created At: {new Date(ticket?.createdAt).toLocaleString()}
            </p>
          </Link>
        ))}
        {tickets.length === 0 && <p>No tickets submitted yet.</p>}
      </div>
    </div>
  )
}

export default Tickets