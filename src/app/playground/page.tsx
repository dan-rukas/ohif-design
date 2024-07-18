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
import icons from '@/components/icons';


export default function Playground() {
  return (
    <main>
    <h1>Playground</h1> 

      <div className="w-60 h-10 bg-bkg-med rounded-t p-2 flex items-start justify-start">
        <div className="flex justify-start items-start">
          <div><Button variant="ghost" size="icon"><icons.pinOpen className="" /></Button></div>
          <div className="text-lg text-infosecondary inline-block ml-2 mt-px">Segmentation</div>
        </div>
      </div>


  </main>
  )
}