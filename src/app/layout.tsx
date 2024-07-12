import type { Metadata } from "next";
import Script from 'next/script'
import BackgroundColorSelector from "@/components/backgroundcolor";
import { useState, useEffect } from 'react';
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/themeprovider"
import { Button } from "@/components/ui/button"
import { Button2 } from "@/components/ui/button2"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >

        <main>
          <h1>OHIF Component Design</h1> 

          <BackgroundColorSelector />

          <h2>Color System</h2>
          <div className="row">
            <div className="example2">
              
            </div>
            <div className="example2">
              <div className="w-16 h-16 bg-actions rounded"></div>
            </div>
            <div className="example2">
              <div className="w-16 h-16 bg-infosecondary rounded"></div>
            </div>
            <div className="example2">
              <div className="w-16 h-16 bg-highlight rounded"></div>
            </div>
            <div className="example2">
              <div className="w-16 h-16 bg-white rounded"></div>
            </div>
  
          </div>

          <h2>Button</h2>

          <div className="row">
            <div className="example"><Button className="" variant="default">Primary Button</Button></div>
            <div className="example"><Button variant="secondary">Secondary Button</Button></div>
            <div className="example"><Button variant="ghost">Ghost Button</Button></div>
            <div className="example"><Button variant="ghost" size="icon">?</Button></div>
            {/*} <div className="example"><Button variant="outline">Button</Button></div> */}
            <div className="example"><Button variant="link">Link</Button></div>
          </div>

          <h2>Button 2</h2>
          <div className="row">
            <div className="example"><Button2 className="" variant="default">Primary Button</Button2></div>
            <div className="example"><Button2 variant="secondary">Secondary Button</Button2></div>
            <div className="example"><Button2 variant="ghost">Ghost Button</Button2></div>
            <div className="example"><Button2 variant="ghost" size="icon">?</Button2></div>
            {/*} <div className="example"><Button variant="outline">Button</Button></div> */}
            <div className="example"><Button2 variant="link">Link</Button2></div>
          </div>

          <h2>Select</h2>
          <div className="row">
            <div className="example">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

        <h2>Input</h2>
        <div className="row">
            <div className="example">
              <div className="inline-block">
                <div className="inline-block mr-4"><Label htmlFor="email">Patient Weight</Label></div>
                <div className="inline-block"><Input type="email" placeholder="(kg)" /></div>
              </div>
            </div>
        </div>

        {children}
        </main>

        </ThemeProvider>

      </body>
    </html>
  );
}
