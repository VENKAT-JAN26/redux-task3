import './App.css';
// App.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodoForm } from './formSlice';

const App = () => {
  const Data = useSelector((state) => state.form.formdata); // Use the correct slice path
  const dispatch = useDispatch();

  const [logindata, setlogindata] = useState({
    name: '',
    email: '',
  });

  const handlesubmit = (event) => {
    event.preventDefault();
    dispatch(addTodoForm(logindata));
    setlogindata({
      name: '',
      email: '',
    });
  };

  return (
    <div style={{textAlign:'center'}} className="app">
      <form onSubmit={handlesubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={logindata.name}
            onChange={(event) =>
              setlogindata((prevdata) => ({
                ...prevdata,
                name: event.target.value,
              }))
            }
          />
        </div>
        <br/>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={logindata.email}
            onChange={(event) =>
              setlogindata((prevdata) => ({
                ...prevdata,
                email: event.target.value,
              }))
            }
          />
        </div>
        <br/>
        <button type="submit">Submit</button>
      </form>
    
      <table className='tablec'>
        <thead>
          <tr>
            <th >Name</th> 
          
            <th >Email</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
     
    </div>
  );
};

export default App;

