"use client"

import Button from "@acme/ui/button";
import { useCounter } from "@acme/ui-utils";

export default function Counter() {
  const { count, increment } = useCounter(0);

  return (
    <Button onClick={increment}>
      <span className="text-lg font-semibold">Get Started {count}</span>
    </Button>
  )
}