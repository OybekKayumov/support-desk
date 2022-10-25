import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {toast} from 'react-toastify'
import {getTicket, reset} from '../features/tickets/ticketSlice.js'
import {BackButton} from '../components/BackButton'
import {Spinner} from '../components/Spinner'
 
function Ticket() {
  const {ticket, isLoading, isSuccess, isError, message} = useSelector((state) => state.tickets)

  const params = useParams()
  const dispatch = useDispatch()
  const {ticketId} = useParams()

  useEffect(() => {
    if(isError) {
      toast.error(message)
    }
    
    dispatch(getTicket(ticketId))
  }, [isError, message, ticketId])
  

  return (
    <div>Ticket</div>
  )
}

export default Ticket