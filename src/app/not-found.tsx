import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-11/12 sm:w-5/4 md:w-3/4 max-w-screen-md flex justify-center gap-5 py-8">
        <Alert className="max-w-sm" variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>Unable to find data</AlertDescription>
        </Alert>
      </div>
    </div>
  );
}
