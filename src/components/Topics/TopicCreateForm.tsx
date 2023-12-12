"use client";

import { useFormState } from "react-dom";
import { FaPlus } from "react-icons/fa";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogHeader,
  DialogFooter,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { createTopic } from "@/actions";

export default function TopicCreateForm() {
  const [formState, action] = useFormState(createTopic, {
    errors: {},
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">
          <FaPlus className="mr-2 h-3 w-3" /> Create New Topic
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form action={action}>
          <DialogHeader>
            <DialogTitle>Add New Topics</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex flex-col items-start gap-1">
              <Label htmlFor="name" className="text-right mb-3">
                Topic Name
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="sports, politics, ..."
                className={`${
                  !!formState.errors.name && "border-2 border-red-400"
                }`}
              />
              {!!formState.errors.name && (
                <p className="text-red-400 text-sm">
                  {formState.errors.name?.join(", ")}
                </p>
              )}
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Textarea
                id="description"
                name="description"
                className={`${
                  !!formState.errors.description && "border-2 border-red-400"
                }`}
              />
              {!!formState.errors.description && (
                <p className="text-red-400 text-sm">
                  {formState.errors.description?.join(", ")}
                </p>
              )}
            </div>
          </div>
          {formState.errors._form ? (
            <div className="py-2 px-4 mb-4 bg-red-200 border border-red-400 rounded-md shadow-md">
              {formState.errors._form?.join(", ")}
            </div>
          ) : null}
          <DialogFooter>
            <Button type="submit">Create Topics</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
