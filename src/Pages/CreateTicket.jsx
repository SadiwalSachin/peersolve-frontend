import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const CreateTicket = () => {

  const token = localStorage.getItem("token")  
  const [ticketData,setTicketData] = useState({title:"",description:""})
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

  function handleTicketDataChange (e){
    setTicketData({...ticketData, [e.target.name]:e.target.value})
  }

  async function handleCreateTicket (e){
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/tickets/create`,{
        method:"POST",
        headers:{
          "Content-Type": "application/json",
          "authorization":`Bearer ${token}`
        },
        body:JSON.stringify(ticketData)
      })
      const data = await res.json()
      setTickets((prev)=>[...prev,data.ticket])
      console.log(`Data after creating new ticket ${data}`);
      console.log(data);
      setLoading(false)
    } catch (error) {
      console.log(`Error while creating a new ticket ${error}`);
      setLoading(false)
    }
  }

  return (
    <div className='bg-zinc-800 sm:p-10 p-2 mt-10 h-[92vh]'>
       <div className="card w-full shadow-xl bg-base-100">
        <form onSubmit={handleCreateTicket} className="card-body">
          <h2 className="card-title justify-center">Ask Doubt</h2>

          <input
            type="input"
            name="title"
            placeholder="Enter title"
            className="input input-bordered w-full"
            value={ticketData.title}
            onChange={handleTicketDataChange}
            required
          />

          <input
            type="input"
            name="description"
            placeholder="Enter discription"
            className="input input-bordered w-full"
            value={ticketData.description}
            onChange={handleTicketDataChange}
            required
          />

          <div className="form-control mt-4">
            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={loading}
            >
              {loading ? "Ticket is creating...." : "Create Ticket"}
            </button>
          </div>
        </form>
      </div>
      <h2 className="text-2xl font-semibold mb-5 border-b-2 mt-7 py-2">All Tickets</h2>
      <div className="space-y-3 h-[46vh] overflow-y-scroll">
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

export default CreateTicket