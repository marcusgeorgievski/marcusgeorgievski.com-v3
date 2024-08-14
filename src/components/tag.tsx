import { cn } from "@/lib/utils";

interface TagProps {
  children: React.ReactNode;
  tag: string;
}

export default function Tag({ children, tag }: TagProps) {
  return (
    <span
      className={cn(
        "bg-accent text-accent-foreground/75 border rounded text-xs px-2 py-0.5 inline-flex items-center justify-center gap-1.5"
      )}
    >
      {children}
    </span>
  );
}
