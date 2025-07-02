"use client";

import { lusitana } from "@/app/ui/fonts";
import {
  BanknotesIcon,
  ClockIcon,
  InboxIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

export function AnimatedCard({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: "invoices" | "customers" | "pending" | "collected";
}) {
  const Icon = iconMap[type];
  const [animatedValue, setAnimatedValue] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Convert value to number for animation, handle string values
  const numericValue =
    typeof value === "string"
      ? parseFloat(value.replace(/[^0-9.-]/g, "")) || 0
      : value;
  const isNumeric = !isNaN(numericValue) && isFinite(numericValue);

  useEffect(() => {
    if (!isNumeric) return;

    setIsAnimating(true);
    const duration = 1000; // 1 second
    const steps = 60; // 60 fps
    const increment = numericValue / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const currentValue = Math.min(increment * currentStep, numericValue);
      setAnimatedValue(currentValue);

      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedValue(numericValue);
        setIsAnimating(false);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [numericValue, isNumeric]);

  // Format the animated value
  const displayValue = isNumeric
    ? typeof value === "string" && value.includes("$")
      ? `$${Math.round(animatedValue).toLocaleString()}`
      : Math.round(animatedValue).toLocaleString()
    : value;

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl transition-all duration-300 ${
            isAnimating ? "scale-105" : "scale-100"
          }`}
      >
        {displayValue}
      </p>
    </div>
  );
}
