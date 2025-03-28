export default function Footer() {
  return (
    <footer
      className="text-black "
      style={{
        backgroundColor: "rgba(30, 29, 29, 0.03)", 
        backdropFilter: "blur(10px)", 
        WebkitBackdropFilter: "blur(10px)", 
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h3 className="text-lg font-bold">Paarth Mehta</h3>
            <p className="text-sm mt-2">
              Capturing the beauty of life through colors and strokes. Explore
              the gallery to witness the passion and creativity of a
              professional painter.
            </p>
          </div>

          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold text-center">Follow Me</h3>
            <div className="flex justify-center mt-2 space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-black"
              >
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-black"
              >
                <i className="fab fa-instagram"></i> Instagram
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-black"
              >
                <i className="fab fa-twitter"></i> Twitter
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-bold">Contact</h3>
            <p className="text-sm mt-2">Email: extraonmymail@gmail.com</p>
            <p className="text-sm">Phone: +91 9414161341</p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-sm text-black">
          © {new Date().getFullYear()} Professional Painter. All rights reserved.
        </div>
      </div>
    </footer>
  );
}