import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import "./style.css";
import { UserProvider } from "./context/userContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body>
        <ToastContainer position="top-center" />
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
