export default function Info() {
  return (
    <div className="min-h-screen  flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">About the Artist</h1>
      <div className="max-w-4xl  shadow-2xl rounded-lg p-8">
        <p className="text-lg text-gray-700 mb-4">
          Welcome to the world of <span className="font-bold">Paarth Mehta</span>, a professional painter who transforms emotions, stories, and dreams into breathtaking works of art. With every brushstroke, Paarth captures the essence of life, blending colors and textures to create timeless masterpieces.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
          Artistic Vision
        </h2>
        <p className="text-gray-700 mb-4">
          My art is a reflection of the beauty I see in the world. From vibrant landscapes to intimate portraits, I strive to evoke emotions and inspire creativity in those who view my work. Each piece is a journey, a story waiting to be told.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
          My Journey
        </h2>
        <p className="text-gray-700 mb-4">
          My journey as an artist began in my childhood, where I found solace in sketching and painting. Over the years, I honed my skills, experimenting with various mediums and techniques. Today, my work is a blend of traditional and contemporary styles, showcasing my evolution as an artist.
        </p>
        <div className="mt-8 text-center">
          <p className="text-lg text-gray-800 font-semibold">
            Explore my gallery and discover the stories behind each painting.
          </p>
          <a
            href="/"
            className="mt-4 inline-block  text-black px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition"
          >
            View Gallery
          </a>
        </div>
      </div>
    </div>
  );
}