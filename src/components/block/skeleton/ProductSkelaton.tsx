import { Skeleton } from "@/components/ui/skeleton";

export const ProductSkeleton = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-4 md:p-10 animate-pulse">
      <Skeleton className="w-full max-w-sm h-96 rounded-lg" />
      <div className="w-full max-w-md space-y-4">
        <Skeleton className="h-8 w-3/4 rounded-md" />
        <Skeleton className="h-6 w-1/4 rounded-md" />
        <Skeleton className="h-6 w-1/3 rounded-md" />
        <Skeleton className="h-40 w-full rounded-md" />
        <Skeleton className="h-10 w-full rounded-md" />
        <Skeleton className="h-12 w-full rounded-md" />
      </div>
    </div>
  );
};
