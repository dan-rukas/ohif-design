import type { Metadata } from "next";
import Script from 'next/script'
import BackgroundColorSelector from "@/components/backgroundcolor";
import { useState, useEffect } from 'react';
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/themeprovider"
import { Button } from "@/components/ui/button"
import { Button2 } from "@/components/ui/button2"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import icons from '../../components/icons'; 


export default function Playground() {
  return (
    <main>
    <h1>Playground</h1> 

      <div className="w-60"> {/* Full panel width */} 
        <div className="h-10 bg-bkg-med rounded-t p-2 flex items-start justify-between">
          <div className="flex justify-start items-start">
            <div><Button variant="ghost" size="icon"><icons.pinOpen /></Button></div>
            <div className="text-lg text-infosecondary inline-block ml-2 mt-px">Segmentation</div>
          </div>
          <div><Button variant="ghost" size="icon"><icons.download /></Button></div>
        </div>

        <div className="h-7 bg-bkg-full my-0.5 rounded text-base flex items-center justify-between">
          <span className="text-infosecondary ml-2">Segmentation tools</span>
          <div className="mt-1.5 mr-0.5"><Button variant="ghost" size="icon" ><icons.chevronOpen /></Button></div>
        </div>

        <div className="h-28 bg-bkg-low">
          <div className="h-8"></div>
          <div className=""></div>
        </div>

        <div className="flex items-center my-2">
         <Label className="w-20 whitespace-nowrap mx-1">Radius (mm)</Label>
         <Slider className="flex-1 mx-1" defaultValue={[50]} max={100} step={1} />
         <Input className="w-10 mx-1" placeholder="32" />
        </div>

        <div className="flex items-center my-2">
         <Label className="w-20 whitespace-nowrap mx-1">Shape</Label>
          <Tabs defaultValue="account" className="flex-1 mx-1">
            <TabsList className="">
              <TabsTrigger value="account">Circle</TabsTrigger>
              <TabsTrigger value="password">Sphere</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
      </div>



  </main>
  )
}