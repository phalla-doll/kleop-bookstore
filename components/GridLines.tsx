export function GridLines() {
  return (
    <div className="absolute inset-0 pointer-events-none flex justify-center z-0 overflow-hidden">
      <div className="w-full max-w-7xl grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 h-full">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="border-r border-dashed border-black/[0.04] h-full w-full first:border-l" />
        ))}
      </div>
    </div>
  );
}
