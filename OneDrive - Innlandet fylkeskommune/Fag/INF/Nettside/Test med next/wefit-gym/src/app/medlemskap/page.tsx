"use client";

import { useState } from "react"; // Import useState
import { useAuth } from "@clerk/nextjs"; // Import the useAuth hook
import { useRouter } from "next/navigation"; // Import useRouter
import Modal from "../../../components/Modal"; // Import the Modal component

const Membership = () => {
  const { isSignedIn } = useAuth(); // Get the sign-in state from Clerk
  const router = useRouter(); // Get the router instance
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  const handlePurchase = (service: string, price: number) => {
    if (isSignedIn) {
      // If the user is signed in, navigate to the payment page
      router.push(`/betaling?service=${service}&price=${price}`);
    } else {
      // If the user is not signed in, open the modal
      setIsModalOpen(true);
    }
  };

  return (
    <div className="flex items-center justify-center gap-32 h-screen">
      <div className="bg-gray-200 rounded-xl shadow-lg pb-6 w-64 text-center">
        <div className="bg-blue-500 text-white py-4 rounded-t-xl">Månedbetaling</div>

        <div className="py-6">
          <p className="text-2xl font-semibold text-black">Kr 450,-</p>
          <p className="text-lg text-black">pr. måned</p>
        </div>

        <button
          className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-6 rounded-full"
          onClick={() => handlePurchase("Månedbetaling", 450)} // Call the purchase handler
        >
          Kjøp nå
        </button>
      </div>

      <div className="bg-gray-200 rounded-xl shadow-lg pb-6 w-64 text-center">
        <div className="bg-blue-500 text-white py-4 rounded-t-xl">Årsbetaling</div>

        <div className="pt-6 pb-3">
          <p className="text-2xl font-semibold text-black">Kr 370,-</p>
          <p className="text-lg text-black">pr. måned</p>
          <p className="text-sm text-black">En betaling på Kr 4440,-</p>
        </div>

        <button
          className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-6 rounded-full"
          onClick={() => handlePurchase("Årsbetaling", 4440)} // Call the purchase handler
        >
          Kjøp nå
        </button>
      </div>

      {/* Modal for Login Reminder */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Membership;
