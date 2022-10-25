import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton';
import { getTickets } from '../features/tickets/ticketSlice';

function Tickets() {
  const {tickets, isLoading, isSuccess } = useSelector((state) => state.tickets)

  const dispatch = useDispatch()

  useEffect(() => {
    return () => {
      if(isSuccess) {
        dispatch(reset())
      }
    }
  }, [dispatch, isSuccess])

  useEffect(() => {
    dispatch(getTickets())
  }, [dispatch])

  if(isLoading) {
    return <Spinner />
  }

  return (
    <div>Tickets</div>
  )
}

export default Tickets