"use client";

import { useFormStatus } from "react-dom";
import { Button, buttonVariants } from "../ui/button";
import React from "react";
import { CgSpinner } from "react-icons/cg";
import { cn } from "@/utils/tw";

interface FormButtonProps {
  children: React.ReactNode;
  className?: string;
}


export default function FormButton({ children, className }: FormButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button className={className} type="submit">
      {pending && <CgSpinner className="animate-spin w-4 h-4 mr-2" />}
      {children}
    </Button>
  );
}
