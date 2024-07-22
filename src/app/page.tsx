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
import icons from '@/components/icons'; 
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
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
import "./globals.css";

export default function HomeTest() {
  return (
    <main>
    <BackgroundColorSelector />

    <h2>Button default</h2>
    <div className="row">
      <div className="example"><Button className="" variant="default">Primary Button</Button></div>
      <div className="example"><Button variant="secondary">Secondary Button</Button></div>
      <div className="example"><Button variant="ghost">Ghost Button</Button></div>
      <div className="example"><Button variant="ghost" size="icon">?</Button></div>
      {/*} <div className="example"><Button variant="outline">Button</Button></div> */}
      <div className="example"><Button variant="link">Link</Button></div>
    </div>

    <h2>Button small</h2>
    <div className="row">
      <div className="example"><Button className="" variant="default" size="sm">Primary Button</Button></div>
      <div className="example"><Button variant="secondary" size="sm">Secondary Button</Button></div>
      <div className="example"><Button variant="ghost" size="sm">Ghost Button</Button></div>
      <div className="example"><Button variant="ghost" size="icon">?</Button></div>
      {/*} <div className="example"><Button variant="outline">Button</Button></div> */}
      <div className="example"><Button variant="link"  size="sm">Link</Button></div>
    </div>

    <h2>Button large</h2>
    <div className="row">
      <div className="example"><Button className="" variant="default" size="lg">Primary Button</Button></div>
      <div className="example"><Button variant="secondary" size="lg">Secondary Button</Button></div>
      <div className="example"><Button variant="ghost" size="lg">Ghost Button</Button></div>
      <div className="example"><Button variant="ghost" size="icon">?</Button></div>
      {/*} <div className="example"><Button variant="outline">Button</Button></div> */}
      <div className="example"><Button variant="link"  size="lg">Link</Button></div>
    </div>

    {/*}
    <h2>Button 2</h2>
    <div className="row">
      <div className="example"><Button2 className="" variant="default">Primary Button</Button2></div>
      <div className="example"><Button2 variant="secondary">Secondary Button</Button2></div>
      <div className="example"><Button2 variant="ghost">Ghost Button</Button2></div>
      <div className="example"><Button2 variant="ghost" size="icon">?</Button2></div>
      <div className="example"><Button variant="outline">Button</Button></div> 
      <div className="example"><Button2 variant="link">Link</Button2></div>
    </div>
    */}


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
          <div className="inline-block mr-4"><Label>Patient Weight</Label></div>
          <div className="inline-block"><Input placeholder="(kg)" /></div>
        </div>
      </div>
  </div>

  <h2>Slider</h2>
  <div className="row">
        <div className="w-40 px-5">
          <Slider className="w-full" defaultValue={[50]} max={100} step={1} />
        </div>
  </div>

  <h2>Switch</h2>
  <div className="row">
    <div className="example">
      <Switch />
    </div>
  </div>

  <h2>Checkbox</h2>
  <div className="row">
    <div className="example">
        <div className="items-top flex space-x-2">
          <Checkbox id="terms1" />
          <div className="grid gap-1.5 leading-none">
            <label>
              Display inactive segmentations
            </label>
        </div>
    </div>
    </div>
  </div>

  <h2>Tabs</h2>
  <div className="row">
    <div className="example">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="account">Circle</TabsTrigger>
          <Separator orientation="vertical" />
          <TabsTrigger value="password">Sphere</TabsTrigger>
          <Separator orientation="vertical" />
          <TabsTrigger value="square">Square</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  </div>

  <h2>Scrollbar</h2>
  <div className="row">
    <div className="example">
      <ScrollArea className="h-[150px] w-[350px] rounded-md border border-input bg-background p-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
      sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
      labore et dolore magna aliqua.
      </ScrollArea>
    </div>
  </div>


  <h2>Toggle & Tooltip</h2>
  <div className="row">
    <div className="example">
    <TooltipProvider delayDuration={150}>
        <Tooltip>
          <TooltipTrigger><Toggle><icons.toolLayout /></Toggle></TooltipTrigger>
          <TooltipContent>
            Layout
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider delayDuration={150}>
        <Tooltip>
          <TooltipTrigger><Toggle><icons.toolLength /> </Toggle></TooltipTrigger>
          <TooltipContent>
            Measure
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider delayDuration={150}>
        <Tooltip>
          <TooltipTrigger><Toggle><icons.toolZoom /> </Toggle></TooltipTrigger>
          <TooltipContent>
            Zoom
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider delayDuration={150}>
        <Tooltip>
          <TooltipTrigger><Toggle><icons.toolMove /> </Toggle></TooltipTrigger>
          <TooltipContent>
            Move
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider delayDuration={150}>
        <Tooltip>
          <TooltipTrigger><Toggle><icons.tool3dRotate /> </Toggle></TooltipTrigger>
          <TooltipContent>
            3D Rotate
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider delayDuration={150}>
        <Tooltip>
          <TooltipTrigger><Toggle><icons.toolCapture /> </Toggle></TooltipTrigger>
          <TooltipContent>
            Capture
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider delayDuration={150}>
        <Tooltip>
          <TooltipTrigger><Toggle><icons.toolCrosshair /> </Toggle></TooltipTrigger>
          <TooltipContent>
            Crosshair
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      
      
      
      
      
      
      
    </div>
  </div>


  <h2>Tooltip alone</h2>
  <div className="row">
    <div className="example">
    <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hello</TooltipTrigger>
          <TooltipContent>
            Layout
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  </div>




  </main>
  )
}