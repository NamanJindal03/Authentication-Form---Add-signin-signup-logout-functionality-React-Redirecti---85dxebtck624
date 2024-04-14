import React, { useEffect } from 'react';
import {useRouter} from 'next/navigation'

function Store() {
  const router = useRouter();

  useEffect(()=>{
    const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
    if(!isLoggedIn){
      router.push('/login');
    }
  },[])

  function handleLogout(){
    localStorage.setItem('isLoggedIn', JSON.stringify(false))
    router.push('/login');
  }

  return (
    <div className='store'>
      <h2>Welcome to the store!</h2>
      <button className='logout-btn' onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Store;
