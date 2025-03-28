"use client";
import { HiOutlineTrash } from "react-icons/hi";

export default function Remove({ public_id, onDelete }) {
  const handleDelete = async () => {
    const confirm = window.confirm("Are you sure you want to delete this image?");
    if (!confirm) return;

    try {
      const response = await fetch(`/api?public_id=${public_id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Image deleted successfully");
        onDelete(public_id);
      } else {
        const data = await response.json();
        alert(`Failed to delete image: ${data.message}`);
      }
    } catch (error) {
      console.error("Error deleting image:", error);
      alert("An error occurred while deleting the image.");
    }
  };

  return (
    <button
      onClick={handleDelete}>
      <HiOutlineTrash size={24}/>
    </button>
  );
}