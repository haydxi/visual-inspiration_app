"use client"

import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function BrandStrategyInput() {
  const [brandStrategy, setBrandStrategy] = useState('');
  const [brandValues, setBrandValues] = useState('');
  const [keyMessaging, setKeyMessaging] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this data to your backend or state management
    console.log({ brandStrategy, brandValues, keyMessaging });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-8">
      <h2 className="text-2xl font-semibold mb-4">Brand Strategy</h2>
      <div>
        <Label htmlFor="brandStrategy">Brand Strategy</Label>
        <Textarea
          id="brandStrategy"
          placeholder="Enter your brand strategy"
          value={brandStrategy}
          onChange={(e) => setBrandStrategy(e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="brandValues">Brand Values</Label>
        <Textarea
          id="brandValues"
          placeholder="Enter your brand values"
          value={brandValues}
          onChange={(e) => setBrandValues(e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="keyMessaging">Key Messaging</Label>
        <Textarea
          id="keyMessaging"
          placeholder="Enter your key messaging"
          value={keyMessaging}
          onChange={(e) => setKeyMessaging(e.target.value)}
        />
      </div>
      <Button type="submit" className="w-full">Update Brand Strategy</Button>
    </form>
  );
}