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
import { Toggle } from "@/components/ui/toggle"
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
import SegRow from "@/components/segrow"


export default function Playground() {
  return (
    <main>
    <h1>Playground</h1> 

      <div className="w-60"> {/* Full panel width for responsive testing */} 
        <div className="h-10 bg-bkg-med rounded-t p-2 flex items-start justify-between">
            <div><Button variant="ghost" size="icon"><icons.pinOpen /></Button></div>
            <div className="text-lg text-infosecondary inline-block ml-2 mt-px">Segmentation</div>
          <div><Button variant="ghost" size="icon"><icons.download /></Button></div>
        </div>

        <div className="h-7 bg-bkg-full my-0.5 rounded text-base flex items-center justify-between">
          <span className="text-infosecondary ml-2">Segmentation tools</span>
          <div className="mt-1.5 mr-0.5"><Button variant="ghost" size="icon" ><icons.chevronOpen /></Button></div>
        </div>

        <div className="h-28 flex bg-bkg-low">
          <div className="h-8"></div>
          <div className=""></div>
        </div>

        <div className="flex items-center my-2">
         <Label className="flex-none w-20 whitespace-nowrap mx-1">Radius (mm)</Label>
         <Slider className="flex-1 mx-1" defaultValue={[50]} max={100} step={1} />
         <Input className="flex-none w-10 mx-1" placeholder="32" />
        </div>

        <div className="flex items-center my-2">
         <Label className="flex-none w-20 whitespace-nowrap mx-1">Shape</Label>
          <Tabs defaultValue="circle" className="mx-1">
            <TabsList>
              <TabsTrigger value="circle">Circle</TabsTrigger>
              <TabsTrigger value="sphere">Sphere</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="my-4"></div>

        <div className="h-7 bg-bkg-full my-0.5 rounded text-base flex items-center justify-between">
          <span className="text-infosecondary ml-2">Segmentation list</span>
          <div className="mt-1.5 mr-0.5"><Button variant="ghost" size="icon" ><icons.chevronOpen /></Button></div>
        </div>

        <div className="h-10 bg-bkg-med p-1 flex items-center">
          <Select>
            <SelectTrigger className="w-36">
              <SelectValue placeholder="Segmentation 1" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Segmentation 1</SelectItem>
              <SelectItem value="dark">Segmentation 2</SelectItem>
              <SelectItem value="system">Segmentation 3</SelectItem>
            </SelectContent>
          </Select>
          <div className="mt-1.5 mx-1"><Button variant="ghost" size="icon" ><icons.more /></Button></div>
        </div>

        <div className="h-8 bg-bkg-low flex items-center py-1">
          <div className="mx-1"><Button variant="ghost" size="default" >+ Add Segment</Button></div>
        </div>
        
        <SegRow number={1} color="#D9534F" text="Segmentation label" />
        <SegRow number={2} color="#5BC0DE" text="Segmentation label" />
        <SegRow number={3} color="#5CB85C" text="Segmentation label" />
        <SegRow number={4} color="#F0AD4E" text="Segmentation label" />
        <SegRow number={5} color="#428BCA" text="Segmentation label" />
        <SegRow number={6} color="#9B59B6" text="Segmentation label" />
        <SegRow number={7} color="#34495E" text="Segmentation label" />
        <SegRow number={8} color="#E74C3C" text="Segmentation label" />
        <SegRow number={9} color="#8E44AD" text="Segmentation label" />
        <SegRow number={10} color="#2ECC71" text="Segmentation label" />
        <SegRow number={11} color="#3498DB" text="Segmentation label" />
        <SegRow number={12} color="#E67E22" text="Segmentation label" />
        <SegRow number={13} color="#F39C12" text="Segmentation label" />
        <SegRow number={14} color="#1ABC9C" text="Segmentation label" />
        <SegRow number={15} color="#D35400" text="Segmentation label" />
        <SegRow number={16} color="#27AE60" text="Segmentation label" />




      </div>



  </main>
  )
}