import cloudinary from "../utils/cloudinary";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { photo, title, description } = await request.json();
  const uploadResponse = await cloudinary.uploader.upload(photo, {
    folder: "posts", 
    context: `title=${title}|description=${description}`,
  });

  return NextResponse.json(
    {
      message: "Image uploaded successfully",
      url: uploadResponse.secure_url,
      title,
      description,
    },
    { status: 201 }
  );
}

export async function GET() {
  try {
    const resources = await cloudinary.search
      .expression("folder:posts")
      .sort_by("created_at", "desc")
      .execute();

    const images = resources.resources.map((resource) => ({
      url: resource.secure_url,
      public_id: resource.public_id
      // ,title: resource.context?.custom?.title || "No Title", // Optional metadata
      // description: resource.context?.custom?.description || "No Description", // Optional metadata
    }));

    return NextResponse.json({ images }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch images", error: error.message },
      { status: 500 }
    );
  }
}

//------------------------------------------------------------------

export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const public_id = searchParams.get("public_id");

  try {
    await cloudinary.uploader.destroy(public_id);

    return NextResponse.json(
      { message: "Image deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to delete image", error: error.message },
      { status: 500 }
    );
  }
}