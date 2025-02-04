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


export default function Colors() {
  return (
    <main>
    <h1>Colors</h1> 

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
    </main>
  )
}