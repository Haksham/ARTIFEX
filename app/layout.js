import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

export const metadata = {
  title: "Artifex",
  description: "Paarth Mehta Drawing collections",
};

export default function RootLayout({ children }) {
  return (<html>
    <body>
      <Header/>
      {children}
      <Footer />
      
    </body>
  </html>
  );
}
