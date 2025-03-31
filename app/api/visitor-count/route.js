import mongoose from "mongoose";

// MongoDB connection
const connectDB = async () => {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  }
};

// Define a schema for visitor count
const visitorSchema = new mongoose.Schema({
  count: { type: Number, required: true },
});

// Create a model for the visitor count
const Visitor = mongoose.models.Visitor || mongoose.model("Visitor",visitorSchema);

export async function GET(req) {
  try {
    // Connect to the database
    await connectDB();

    // Find the visitor count document or create one if it doesn't exist
    let visitor = await Visitor.findOne();
    if (!visitor) {
      visitor = new Visitor({ count: 0 });
    }

    // Increment the visitor count
    visitor.count += 1;
    await visitor.save();

    // Return the updated count
    return new Response(JSON.stringify({ count: visitor.count }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in visitor count API:", error);
    return new Response(
      JSON.stringify({ message: "Internal Server Error", error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}