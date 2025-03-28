"use client";
import {useAuthState} from 'react-firebase-hooks/auth';
import { useEffect} from 'react';
import {auth} from '@/app/firebase/config';
import { useRouter } from 'next/navigation';
import { useState } from "react";

export default function AddImage() {


  
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
      setImageUrl(data.url); 
    };

    reader.readAsDataURL(photo);
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-center text-3xl font-bold text-gray-800 mb-8">
        Upload Image
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 max-w-2xl mx-auto"
      >
        {/* File Input */}
        <div className="mb-6">
          <label
            htmlFor="fileInput"
            className="block text-lg font-semibold text-gray-700 mb-2"
          >
            Select an Image
          </label>
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            onChange={(e) => setPhoto(e.target.files[0])}
            className="block w-full text-gray-700 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
  
        {/* Title Input */}
        <div className="mb-6">
          <label
            htmlFor="titleInput"
            className="block text-lg font-semibold text-gray-700 mb-2"
          >
            Title
          </label>
          <input
            id="titleInput"
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="block w-full text-gray-700 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
  
        {/* Description Input */}
        <div className="mb-6">
          <label
            htmlFor="descriptionInput"
            className="block text-lg font-semibold text-gray-700 mb-2"
          >
            Description
          </label>
          <textarea
            id="descriptionInput"
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="block w-full text-gray-700 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
  
        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white text-lg font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-blue-600 transition"
          >
            Upload
          </button>
        </div>
      </form>
  
      {/* Uploaded Image Preview */}
      {imageUrl && (
        <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Uploaded Image</h2>
          <img
            src={imageUrl}
            alt="Uploaded"
            className="w-full h-auto rounded-lg mb-4"
          />
          <p className="text-lg text-gray-700">
            <strong>Title:</strong> {title}
          </p>
          <p className="text-lg text-gray-700">
            <strong>Description:</strong> {description}
          </p>
        </div>
      )}
    </div>
  );
}