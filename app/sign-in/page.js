'use client';
import { useState } from 'react';
import {useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth';
import {auth} from '@/app/firebase/config';
import { useRouter } from 'next/navigation';
import Link from 'next/link';



export default function SignIn(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInWithEmailAndPassword,user,loading,error] = useSignInWithEmailAndPassword(auth);    //add something
  const router = useRouter();


  const handleSignIn = async () => {
    try {
        const res = await signInWithEmailAndPassword(email, password);
        // console.log({res});
        if(!res){
            return;
        }else{
        sessionStorage.setItem('user', true);
        setEmail('');
        setPassword('');
        router.push('/add');
      }
    }catch(e){
        console.error(e);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-900">
      <div className="bg-800 p-10 rounded-lg shadow-xl w-96">
        <h1 className="text-black text-2xl mb-5">Sign In</h1>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className="w-full p-3 mb-4 bg-700 rounded outline text-white placeholder-white-500"
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          className="w-full p-3 mb-4 bg-700 rounded outline text-white placeholder-white-500"
        />
        {error && <p className="text-red-500 text-xs italic mb-4">{error.message}</p>}
        <button 
          onClick={handleSignIn}
          className="w-full p-3 bg-blue-600 rounded text-white hover:bg-indigo-500"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};