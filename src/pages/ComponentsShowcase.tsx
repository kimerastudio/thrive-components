import React from "react";
import { Button } from "../components/ui/button";
import { Switch } from "../components/ui/switch";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@radix-ui/react-select";
import { Checkbox } from "@radix-ui/react-checkbox";
import { Slider } from "@/components/ui/slider";

export const ComponentsShowcase: React.FC = () => {
  return (
    <div className="container py-10 px-4 flex flex-col gap-4">
      <h1 className="text-3xl font-bold mb-8">Thrive Component</h1>
      <Button>Click me</Button>
      <Switch />
      <Input />
      <Textarea />
      <Select />
      <Checkbox />
      <Slider />
    </div>
  );
};
