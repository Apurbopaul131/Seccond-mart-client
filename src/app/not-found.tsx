const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="relative flex flex-col items-center justify-center w-80 h-80">
        {/* Antenna */}
        <div className="absolute top-[-60px] flex flex-col items-center">
          <div className="w-12 h-12 bg-orange-600 rounded-full border-2 border-black relative">
            <div className="absolute w-4 h-4 bg-gray-400 border-2 border-black rounded-full top-[-30px] left-[-20px]"></div>
            <div className="absolute w-4 h-4 bg-gray-400 border-2 border-black rounded-full top-[-30px] right-[-20px]"></div>
          </div>
          <div className="w-20 h-1 bg-gray-800 transform rotate-[-30deg] mt-[-10px]"></div>
          <div className="w-20 h-1 bg-gray-800 transform rotate-[30deg] mt-[-10px]"></div>
        </div>

        {/* TV Frame */}
        <div className="relative w-64 h-40 bg-orange-700 border-4 border-black rounded-lg shadow-lg flex items-center justify-center">
          <div className="absolute w-60 h-36 bg-black rounded-md flex items-center justify-center text-white text-lg font-bold">
            NOT FOUND
          </div>
        </div>

        {/* TV Base */}
        <div className="w-20 h-6 bg-gray-800 mt-2 rounded-md"></div>
        <div className="w-10 h-3 bg-gray-700 mt-1 rounded-md"></div>
      </div>

      {/* 404 Text */}
      <div className="absolute bottom-10 flex text-white text-6xl font-bold space-x-4">
        <span className="text-orange-500">4</span>
        <span className="text-gray-300">0</span>
        <span className="text-orange-500">4</span>
      </div>
    </div>
  );
};

export default NotFoundPage;
