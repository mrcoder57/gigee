"use client";
import { CopyIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AiOutlineShareAlt } from "react-icons/ai";
import { useRef } from "react";
import { toast } from "sonner";
interface GigProps {
  gigId: string;
}
const Share: React.FC<GigProps> = ({ gigId }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const copyToClipboard = () => {
    if (inputRef.current) {
      inputRef.current.select();
      document.execCommand("copy");
      toast.success("Link copied to clipboard!");
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className=" flex items-center justify-center gap-x-2">
          <AiOutlineShareAlt size={20} />
          Share
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center justify-center gap-x-4 space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              ref={inputRef}
              defaultValue={`https://gigbnb.vercel.app/pages/gig/${gigId}`}
              readOnly
            />
          </div>
          <Button
            type="submit"
            variant="link"
            size="sm"
            className="px-3"
            onClick={copyToClipboard}
          >
            <span className="sr-only">Copy</span>
            <CopyIcon className="h-4 w-4" />
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="ghost">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default Share;
