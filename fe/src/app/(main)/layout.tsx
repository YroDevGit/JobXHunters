
import Header from "@/components/ui/user/Header";
import Footer from "@/components/ui/user/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=""
      >
        <div className="min-h-screen w-full bg-[radial-gradient(ellipse_at_top_center,_rgba(236,72,153,0.4),_transparent_50%)] bg-black">
          <div className="absolute inset-0 backdrop-blur-md bg-transparent">
              <div className="relative  flex flex-col min-h-screen">
               <Header/>
                {children}
                <Footer />
            </div>          
          </div>          
        </div>
       
      </body>
    </html>
  );
}
