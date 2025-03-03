export default function Home() {
    return (
      <div className="flex flex-col items-center justify-center md:flex-row md:flex-wrap">
        <div className="bg-red-500 h-[160px] lg:h-80 md:w-full lg:w-1/2 lg:flex-1">
          Red
        </div>
        <div className="bg-blue-500 h-40 lg:h-80 md:w-1/2 lg:w-1/2 lg:flex-1">
          Blue
        </div>
        <div className="bg-green-500 h-40 lg:h-80 md:w-1/2 lg:w-1/2 lg:flex-1">
          Green
        </div>
      </div>
    );
  }