function Tag({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-4 py-1 uppercase text-white bg-gray-secondary hover:bg-gray rounded inline-block text-sm md:text-base cursor-pointer">
      {children}
    </div>
  );
}

export default Tag;
