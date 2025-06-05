import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const SolveTickets = () => {

  const token = localStorage.getItem("token")  
  const [tickets,setTickets] =useState([])
  const[loading,setLoading] = useState(false)

  async function getTickets (){
    try {    
      const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/tickets/get-assigned-ticket`,{
        method:"POST",
        headers:{
          "Content-Type": "application/json",
          "authorization":`Bearer ${token}`
        }
      })
      const data = await res.json()
      const allTickets = data.tickets
      setTickets(allTickets)
      console.log("tickets",data);
    } catch (error) {
      console.log(`error in tickets page ${error}`); 
    }
  }

  useEffect(()=>{
    getTickets()
  },[])
  return (
    <div className='bg-zinc-800 h-[87vh] p-10'>
      <h2 className="text-xl font-semibold mb-2">Solve Tickets</h2>
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
        {tickets.length === 0 && <p>No tickets there to solve.</p>}
      </div>
    </div>
  )
}

export default SolveTickets