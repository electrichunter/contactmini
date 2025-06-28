 
import "./globals.css";
import Menu from "./global/menu";
 import BottomNavbar from "./home/BottomNavbar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html lang="en">
      <body
        className={` `}>
      <Menu />
        {children}
      <BottomNavbar />
      
      
      </body>
    </html>
  );
}
