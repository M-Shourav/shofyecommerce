const Loading = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center gap-2">
      <div className="w-12 h-12 flex items-center justify-center rounded-full relative">
        <div className="w-12 h-12 absolute top-0 right-0 border-4 border-l-green-400 rounded-full animate-spin" />
        <div className="w-12 h-12 absolute top-0 right-0 border-4 border-r-yellow-400 rounded-full animate-spin" />
      </div>
      Loading...
    </div>
  );
};

export default Loading;
