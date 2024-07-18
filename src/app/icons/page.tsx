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


const IconsPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex items-center space-x-4">
        <icons.download className="w-6 h-6 text-blue-500 hover:text-white transition-colors duration-200" />
        <icons.viewList className="w-6 h-6 text-blue-500 hover:text-white transition-colors duration-200" />
      </div>
    </div>
  );
};

export default IconsPage;
