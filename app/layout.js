import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Spendly",
  description: "Personal finance, reimagined. Track, plan, and grow with clarity.",
   icons: {
    icon: "/titlelogo.png", 
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          <Header/>
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />
          <footer className="py-10 border-t bg-secondary/30">
            <div className="container mx-auto px-4 text-center text-muted-foreground">
              <p>© 2025 Spendly. Crafted with care.</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
