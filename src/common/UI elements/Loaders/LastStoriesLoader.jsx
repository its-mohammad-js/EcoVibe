function LastStoriesLoader() {
  return (
    <div className="size-full overflow-hidden rounded-xl relative animate-pulse">
      <div className="h-96 w-full bg-gradient-to-br from-gray-300 to-gray-700"></div>

      <div className="absolute bottom-0 w-full h-20 bg-gray-900/80 backdrop-blur px-4 py-2 flex flex-col justify-evenly">
        <p className="w-48 rounded-md h-2 bg-gray-400"></p>
        <p className="w-24 rounded-md h-2 bg-gray-400"></p>
      </div>
    </div>
  );
}

export default LastStoriesLoader;
