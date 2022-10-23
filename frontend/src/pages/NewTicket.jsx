import React, {useState} from 'react';
import {useSelector} from 'react-redux';

function NewTicket() {
  const {user} = useSelector((state) => state.auth);
  const [name] = useState(user.name);
  const [email] = useState(user.email);
  const [product, setProduct] = useState('iPhone');
  const [description, setDescription] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
  }
  
  return (
    <>
      <section>
        <h1>Create New Ticket</h1>
        <p>Please fill out the form below</p>
      </section>

      <section className='form'>
        <div className='form-group'>
          <label htmlFor="name">Customer Name</label>
          <input type="text" className='form-control' value={name} disabled />
        </div>

        <div className='form-group'>
          <label htmlFor="email">Customer Email</label>
          <input type="text" className='form-control' value={email} disabled />
        </div>

        <form onSubmit={onSubmit}>

        </form>
      </section>
    </>
  )
}

export default NewTicket