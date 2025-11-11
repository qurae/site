import Image from "next/image";

export const Banner = () => {
  return (
    <div className="w-full relative">
      <Image
        src="/images/banner.jpg"
        alt="Banner"
        width={1920}
        height={1080}
        className="w-full h-screen object-cover"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-5xl md:text-7xl font-bold drop-shadow-lg">
          Get Federation Ready
        </h1>
      </div>
    </div>
  );
};

