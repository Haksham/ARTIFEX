"use client";
import { useEffect, useState } from "react";

export default function Index() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

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

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (<>
    <div className={` flex flex-col justify-center py-5 items-center m-0`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 justify-center items-center">
      {images.map((image) => (
      <div
        key={image.public_id}
        className="border-0 p-2 flex flex-col items-center rounded-full h-50 w-50 cursor-pointer justify-center"
        onClick={() => handleImageClick(image)}
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
      </div>
    ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 max-w-full max-h-screen flex justify-center items-center z-50"
          onClick={closeModal}
          style={{
            backgroundColor: "rgba(30, 29, 29, 0.42)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
        >
          <div className="relative">
            <img
              src={selectedImage.url}
              alt={selectedImage.public_id}
              className="max-w-full max-h-screen"
            />
          </div>
        </div>
      )}
    </div>
    <div
        className="fixed right-1 top-18 w-20 h-30 cursor-pointer"
        style={{
          backgroundImage: "url('/images/fin.png')", 
          backgroundSize: "cover",
          backgroundPosition: "center",
          // boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", 
        }}
      ></div>
    </>
  );
}