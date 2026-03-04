import * as React from "react";
import { Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "./input";

export interface DateInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const DateInput = React.forwardRef<HTMLInputElement, DateInputProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <Input
          type="date"
          className={cn(
            "block w-full h-10 pr-10 appearance-none bg-background",
            "date-input-ios-fix", // Custom hook for CSS
            className
          )}
          ref={ref}
          {...props}
        />
        <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
      </div>
    );
  }
);
DateInput.displayName = "DateInput";

export { DateInput };
