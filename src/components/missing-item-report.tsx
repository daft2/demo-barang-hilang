"use client";

import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Calendar } from "../components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "../lib/utils";
import React from "react";

function MissingItemReportComponent() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState<Date>();
  const [location, setLocation] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log({ title, date, location, image });
    // Reset form after submission
    setTitle("");
    setDate(undefined);
    setLocation("");
    setImage(null);
    alert("Report submitted successfully!");
  };

  return (
    <div className="max-w-md rounded-lg bg-card p-6 shadow-lg">
      <h1 className="mb-6 text-center text-2xl font-bold">
        Report Missing Item
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="image">Image of Missing Item</Label>
          <Input
            id="image"
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files?.[0] ?? null)}
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Blue Backpack"
            required
          />
        </div>
        <div>
          <Label htmlFor="date">When Did You Lose It?</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground",
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        <div>
          <Label htmlFor="location">Where Did You Lose It?</Label>
          <Textarea
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Describe the location"
            required
          />
        </div>
        <Button type="submit" className="w-full">
          Submit Report
        </Button>
      </form>
    </div>
  );
}

export default MissingItemReportComponent;
