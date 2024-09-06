import { CircleSlash2 } from "lucide-react";

export const EmptyState = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-12 px-6 min-h-[340px] bg-stone-200/25 border rounded-lg shadow-inner">
      <CircleSlash2 className="w-12 h-12 mx-auto mb-4 text-gray-400" />
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
        No effects found
      </h3>
      <p className="text-gray-500 dark:text-gray-400">
        Try adjusting your search or filter to find what you&apos;re looking
        for.
      </p>
    </div>
  );
};
