import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard() {
  return (
    <div className="flex flex-col mt-10 h-auto lg:w-72 md:w-[300px] w-[300px] mx-auto   rounded-lg overflow-hidden">
      <Skeleton className="relative w-full h-[310px] rounded-xl shadow-lg" />
      <div className="space-y-2 mt-5">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}
