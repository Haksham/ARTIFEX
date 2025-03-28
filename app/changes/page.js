"use client";
import { useEffect, useState } from "react";
import Remove from "../components/remove";
import Link from "next/link";

export default function Changes() {
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
      <button><Link href={"/add"}>Add</Link></button>
      <h1 className="text-center">Manage Images</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image) => (
          <div key={image.public_id} className="border p-2">
            <img
              src={image.url}
              alt={image.public_id}
              className="w-full h-auto"
            />
            <Remove public_id={image.public_id} onDelete={handleDelete} />
          </div>
        ))}
      </div>
    </div>
  );
}