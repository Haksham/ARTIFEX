"use client";
// import {useAuthState} from 'react-firebase-hooks/auth';
// import { useEffect} from 'react';
// import {auth} from '@/app/firebase/config';
// import { useRouter } from 'next/navigation';
import { useState } from "react";

export default function AddImage() {


  
  // const [user] = useAuthState(auth);
  // const router = useRouter();
  // const [userSession, setUserSession] = useState(null);
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     setUserSession(sessionStorage.getItem('user'));
  //   }
  // }, []);
  // useEffect(() => {
  //   if (!user && !userSession) {
  //     router.push('/sign-in');
  //   }
  // }, [user, userSession, router]);



  const [photo, setPhoto] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!photo || !title || !description) {
      alert("Please fill in all fields and select an image to upload.");
      return;
    }

    // Convert the image file to Base64
    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64String = reader.result;

      // Send the Base64 image and metadata to the API
      const response = await fetch("/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ photo: base64String, title, description }),
      });

      const data = await response.json();
      setImageUrl(data.url); // Save the returned image URL
    };

    reader.readAsDataURL(photo);
  };

  return (
    <div className="container">
      <h1 className="text-center">Upload Image</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setPhoto(e.target.files[0])}
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div className="flex justify-center">
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Upload
          </button>
        </div>
      </form>

      {imageUrl && (
        <div className="mt-4">
          <h2>Uploaded Image:</h2>
          <img src={imageUrl} alt="Uploaded" className="mt-2" />
          <p><strong>Title:</strong> {title}</p>
          <p><strong>Description:</strong> {description}</p>
        </div>
      )}
    </div>
  );
}