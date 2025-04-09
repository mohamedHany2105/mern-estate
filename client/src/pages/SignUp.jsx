import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
export default function SignUp() {
  const [formData, steFormDate] = useState({});
  const [error,setError]=useState(null);
  const [loading,setLoading]=useState();
  const navigate = useNavigate();
  const handleChange = (e) => {
    steFormDate({
      ...formData,
      [e.target.id]: e.target.value,
    });

  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        
        body: JSON.stringify(formData),
      });
      console.log(res)
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      navigate('/sign-in');
      setError(null);

    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  




  



  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4  ' onSubmit={handleSubmit} >
        <input type="text" onChange={handleChange} placeholder='username' className='border p-3 rounded-lg ' id="name" />
        <input type="text" onChange={handleChange} placeholder='email' className='border p-3 rounded-lg ' id="email" />
        <input type="text" onChange={handleChange} placeholder='password' className='border p-3 rounded-lg ' id="password" />
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase
         hover:opacity-95 disabled:opacity-80'> 
         {loading? 'loading...':'sign Up'}
         </button>
      </form>

      <div className='flex mt-5 gap-2'>
        <p>Have an account?</p>
        <Link to={'/sign-in'}>
          <span className='text-blue-750'> sign in</span>
        </Link>

      </div>
{error && <p className='text-red-500 mt-5 ' >{error}</p>}
    </div>
  )
}