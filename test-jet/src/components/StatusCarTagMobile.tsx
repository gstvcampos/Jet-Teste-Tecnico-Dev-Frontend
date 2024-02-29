import { cn } from "@/lib/ultis";
import { AvailableIcon } from "./icons/AvailableIcon";
import { UnavailableIcon } from "./icons/UnavailableIcon";

export default function StatusCarTagMobile({ status }: { status: string }) {
  return (
    <div
      className={cn(
        "absolute rounded-full top-1 left-1",
        status === "Available" ? "bg-green-600" : "bg-red-600"
      )}
    >
      {status === "Available" ? <AvailableIcon /> : <UnavailableIcon />}
    </div>
  );
}