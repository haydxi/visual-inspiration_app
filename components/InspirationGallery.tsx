"use client"

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const mockImages = [
  { id: 1, src: 'https://source.unsplash.com/random/800x600?design', alt: 'Inspiration 1' },
  { id: 2, src: 'https://source.unsplash.com/random/800x600?typography', alt: 'Inspiration 2' },
  { id: 3, src: 'https://source.unsplash.com/random/800x600?color', alt: 'Inspiration 3' },
  { id: 4, src: 'https://source.unsplash.com/random/800x600?layout', alt: 'Inspiration 4' },
  { id: 5, src: 'https://source.unsplash.com/random/800x600?branding', alt: 'Inspiration 5' },
  { id: 6, src: 'https://source.unsplash.com/random/800x600?ui', alt: 'Inspiration 6' },
];

export default function InspirationGallery() {
  const [colorPalette, setColorPalette] = useState('#000000');
  const [typographyStyle, setTypographyStyle] = useState('');
  const [mood, setMood] = useState('');

  return (
    <div>
      <div className="mb-6 space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Filters</h2>
        <div>
          <Label htmlFor="colorPalette">Color Palette</Label>
          <Input
            id="colorPalette"
            type="color"
            value={colorPalette}
            onChange={(e) => setColorPalette(e.target.value)}
            className="h-10 w-full"
          />
        </div>
        <div>
          <Label htmlFor="typographyStyle">Typography Style</Label>
          <Select onValueChange={setTypographyStyle}>
            <SelectTrigger id="typographyStyle">
              <SelectValue placeholder="Select style" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="serif">Serif</SelectItem>
              <SelectItem value="sans-serif">Sans-serif</SelectItem>
              <SelectItem value="monospace">Monospace</SelectItem>
              <SelectItem value="display">Display</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="mood">Mood</Label>
          <Select onValueChange={setMood}>
            <SelectTrigger id="mood">
              <SelectValue placeholder="Select mood" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="energetic">Energetic</SelectItem>
              <SelectItem value="calm">Calm</SelectItem>
              <SelectItem value="professional">Professional</SelectItem>
              <SelectItem value="playful">Playful</SelectItem>
              <SelectItem value="luxurious">Luxurious</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button className="w-full">Apply Filters</Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockImages.map((image) => (
          <Card key={image.id}>
            <CardContent className="p-2">
              <img src={image.src} alt={image.alt} className="w-full h-48 object-cover rounded-md" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}