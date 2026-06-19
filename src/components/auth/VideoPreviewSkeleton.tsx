export const VideoPreviewSkeleton = () => {
  return (
    <div className="w-full max-w-md animate-pulse">
      {/* Thumbnail */}
      <div className="relative aspect-video w-full rounded-xl bg-gray-300 overflow-hidden">
        {/* Play button skeleton */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-14 w-14 rounded-full bg-gray-400" />
        </div>
      </div>

      {/* Video title */}
      <div className="mt-4 h-4 w-3/4 rounded bg-gray-300" />

      {/* Video meta */}
      <div className="mt-2 h-3 w-1/2 rounded bg-gray-200" />
    </div>
  );
};
