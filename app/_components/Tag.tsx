function Tag({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-4 py-1 uppercase text-white hover:bg-white/10 bg-gray rounded inline-block text-sm md:text-base cursor-pointer">
      {children}
    </div>
  );
}

export default Tag;
