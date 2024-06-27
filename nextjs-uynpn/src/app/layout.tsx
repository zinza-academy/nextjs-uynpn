'use client';

import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import store from "@/lib/store";
import ThemeRegistry from "@/theme/ThemeRegistry";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{ 
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeRegistry>
       <body className={inter.className}>
          <Provider store={store}>
            {children}
         </Provider>
       </body>
      </ThemeRegistry>
    </html> 
  ); 
}
