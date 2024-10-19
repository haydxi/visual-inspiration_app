"use client"

import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const personas = [
  { id: 1, name: 'Tech-savvy Millennial' },
  { id: 2, name: 'Eco-conscious Parent' },
  { id: 3, name: 'Luxury Lifestyle Enthusiast' },
  { id: 4, name: 'Budget-conscious Student' },
  { id: 5, name: 'Health and Wellness Advocate' },
];

export default function PersonaSelector() {
  const [selectedPersona, setSelectedPersona] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this data to your backend or state management
    console.log({ selectedPersona });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Audience Persona</h2>
      <div>
        <Label htmlFor="persona">Select Persona</Label>
        <Select onValueChange={setSelectedPersona}>
          <SelectTrigger id="persona">
            <SelectValue placeholder="Choose a persona" />
          </SelectTrigger>
          <SelectContent>
            {personas.map((persona) => (
              <SelectItem key={persona.id} value={persona.name}>
                {persona.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Button type="submit" className="w-full">Apply Persona</Button>
    </form>
  );
}