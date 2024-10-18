import Image from "next/image";

export default function Home() {
  return (
    <div 
      className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center"
      style={{ backgroundImage: "url('/img/image0.png')" }}
    >
        <div className="justify-center">
          <h3 className="flex text-center pb-12 text-6xl text-white">Velkommen til WeFit Gym</h3>

          <div className="flex justify-center">
              <button className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded">
              <a href="/om-oss">Trykk her for å lese mer om oss</a>
              </button>
          </div>
        </div>
    </div>
  );
}
