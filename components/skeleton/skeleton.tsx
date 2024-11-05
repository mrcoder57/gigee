import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard() {
  return (
    <div className="flex flex-col py-5 h-[400px] lg:w-[300px] md:w-[330px] w-[320px] gap-y-4   rounded-lg overflow-hidden">
      <Skeleton className="relative w-full h-[300px] rounded-xl shadow-lg" />
      <div className="space-y-2 mt-5">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}
