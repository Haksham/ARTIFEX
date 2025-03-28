"use client";
import { useEffect, useState } from "react";

export default function Index() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null); // State to track the selected image

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
    setSelectedImage(image); // Set the clicked image as the selected image
  };

  const closeModal = () => {
    setSelectedImage(null); // Close the modal by resetting the selected image
  };

  return (
    <div>
      <h1 className="text-center">Uploaded Images</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        {images.map((image) => (
          <div
            key={image.public_id}
            className="border-0 p-2 flex flex-col items-center cursor-pointer"
            onClick={() => handleImageClick(image)} // Handle image click
          >
            <img
              src={image.url}
              alt={image.public_id}
              className="w-40 h-40 rounded-full object-cover" // Circular styling
            />
            <h3 className="mt-2 font-bold text-center">{image.title}</h3>
            <p className="text-center">{image.description}</p>
          </div>
        ))}
      </div>

      {/* Modal for full-screen image */}
      {selectedImage && (<>
       
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={closeModal} // Close modal when clicking outside the image
        >
          <div className="relative">
            <img
              src={selectedImage.url}
              alt={selectedImage.public_id}
              className="max-w-full max-h-screen"
            />
          </div>
        </div>
        </>
      )}
    </div>
  );
}