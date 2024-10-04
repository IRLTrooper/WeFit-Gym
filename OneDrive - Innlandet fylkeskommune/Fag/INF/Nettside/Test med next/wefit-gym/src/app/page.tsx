import Image from "next/image";

export default function Home() {
  return (
    <div>
    
        {/* <Image alt="" src="/image0.png" width={1000} height={1000} className="w-full bg"/> */}
        <div className="">

          <h3 className="flex justify-evenly text-center pt-80 pb-10 text-6xl text-white">Velkommen til WeFit Gym</h3>

          <div className="flex justify-center">
              <button className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded">
              <a href="Om-oss.html">Trykk her for å lese mer om oss</a>
              </button>
          </div>
        </div>
    </div>
  );
}
