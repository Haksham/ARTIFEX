"use client";
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from '@/app/firebase/config';
import { useRouter } from 'next/navigation';


import { useEffect, useState } from "react";
import Remove from "../components/remove";
import Link from "next/link";

export default function Changes() {

  const [user] = useAuthState(auth);
  const router = useRouter();
  const [userSession, setUserSession] = useState(null);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUserSession(sessionStorage.getItem('user'));
    }
  }, []);
  useEffect(() => {
    if (!user && !userSession) {
      router.push('/sign-in');
    }
  }, [user, userSession, router]);


  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("/api");
        const data = await response.json();
        setImages(data.images);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  const handleDelete = (public_id) => {
    setImages((prevImages) => prevImages.filter((image) => image.public_id !== public_id));
  };

  return (
  <div>
    <div className="flex justify-center my-4">
      <Link
        href={"/add"}
        className="bg-blue-700 text-white text-lg font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-blue-600 transition"
      >
        Add
      </Link>
    </div>
    <h1 className="text-center text-2xl font-bold mb-6">Manage Images</h1>
    <div className={`flex flex-col justify-center py-5 items-center m-0`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 justify-center items-center">
        {images.map((image) => (
          <div
            key={image.public_id}
            className="border-0 p-2 flex flex-col items-center rounded-full h-50 w-50 cursor-pointer justify-center"
            style={{
              backgroundImage: "url('/images/circle.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <img
              src={image.url}
              alt={image.public_id}
              className="w-40 h-40 rounded-full object-cover"
              loading="lazy"
            />
            <Remove public_id={image.public_id} onDelete={handleDelete} />
          </div>
        ))}
      </div>
    </div>
  </div>
);
}