// src/app/customPage/page.tsx

import React from "react";

import type { Metadata } from "next";
import Script from "next/script";
import BackgroundColorSelector from "@/components/backgroundcolor";
import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/themeprovider";
import { Button } from "@/components/ui/button";
import { Button2 } from "@/components/ui/button2";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Toggle } from "@/components/ui/toggle";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import icons from "../../components/icons";
import Grid from "@/components/grid";
import SegRow from "@/components/segrow";

export default function Viewer() {
  return (
    <div>
      <div className="h-screen border">
      <div className="flex items-center justify-between h-10 bg-bkg-med w-full px-2">
        <div className="flex-none justify-center">
          <Toggle>
            <icons.panelStudies />
          </Toggle>
        </div>
        <div className="flex-grow flex justify-center">
          <Toggle>
            <icons.toolLayout />
          </Toggle>
          <Toggle>
            <icons.toolLength />
          </Toggle>
          <Toggle>
            <icons.toolZoom />
          </Toggle>
          <Toggle>
            <icons.toolMove />
          </Toggle>
          <Toggle>
            <icons.tool3dRotate />
          </Toggle>
          <Toggle>
            <icons.toolCapture />
          </Toggle>
          <Toggle>
            <icons.toolCrosshair />
          </Toggle>
        </div>
      </div>
      <div className="flex-grow border" style={{ height: 'calc(100vh - 2.5rem)' }}>
        <Grid rows={3} cols={3} />

      </div>
    </div>
    </div>
  );
}
