"use client";

import { useFormState } from "react-dom";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import FormButton from "@/components/Core/FormButton";
import { createPost } from "@/actions";

interface PostCreateFormProps {
  slug: string;
}

export default function PostCreateForm({slug}: PostCreateFormProps) {
  const [formState, action] = useFormState(createPost.bind(null, slug), {
    errors: {},
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">
          <FaPlus className="mr-2 h-3 w-3" /> Create New Post
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form action={action}>
          <DialogHeader>
            <DialogTitle>Add New Post</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex flex-col items-start gap-1">
              <Label htmlFor="title" className="text-right mb-3">
                Post Title
              </Label>
              <Input
                autoComplete="off"
                id="title"
                name="title"
                placeholder="Write Something..."
                className={`${
                  !!formState.errors.title && "border-2 border-red-400"
                }`}
              />
              {!!formState.errors.title && (
                <p className="text-red-400 text-sm">
                  {formState.errors.title?.join(", ")}
                </p>
              )}
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="content" className="text-right">
                Content
              </Label>
              <Textarea
                autoComplete="off"
                id="content"
                name="content"
                className={`${
                  !!formState.errors.content && "border-2 border-red-400"
                }`}
              />
              {!!formState.errors.content && (
                <p className="text-red-400 text-sm">
                  {formState.errors.content?.join(", ")}
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
            <FormButton>Create Topics</FormButton>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
