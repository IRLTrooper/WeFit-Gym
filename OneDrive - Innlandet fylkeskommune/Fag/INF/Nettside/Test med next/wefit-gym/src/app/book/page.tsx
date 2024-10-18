"use client";

import { useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Modal from "../../../components/Modal";

const Book = () => {
  const { isSignedIn } = useAuth();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get the selected service, price, and date
    const selectedDate = event.currentTarget.date.value;
    const selectedOption = event.currentTarget.option.value;

    // Split the option value to get the service and price
    const [selectedService, price] = selectedOption.split('_'); // Assume service and price are separated by a hyphen

    // Redirect to payment page if user is signed in, otherwise show modal
    if (isSignedIn) {
      router.push(`/betaling?service=${selectedService}&date=${selectedDate}&price=${price}`);
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <div className="flex justify-center py-52">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center text-black">Book time</h2>

        <form id="bookingForm" className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-lg font-medium text-gray-700">Velg en dato</label>
            <input type="date" id="date" name="date" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 text-gray-500" required></input>
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700">Velg en tjeneste</label>
            <select id="option" name="option" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 text-black" required>
              <optgroup label="Gruppetimer">
                <option value="9ukers-1okt_1450">9-ukers trening, 1 økt pr. uke - 1450kr</option>
                <option value="9ukers-2okter_2550">9-ukers trening, 2 økter pr. uke - 2550kr</option>
                <option value="jul-1okt_2700">Frem til jul, 1 økt pr. uke - 2700kr (540kr pr. Mnd.)</option>
                <option value="jul-2okter_4200">Frem til jul, 2 økter pr. uke - 4200kr (840kr pr. Mnd.)</option>
                <option value="nedivekt_3500">Ned i vekt – lukket gruppe - 3500kr (Uke 43-50)</option>
              </optgroup>
              <optgroup label="Private PT-timer">
                <option value="pt-10-40min_4900">10 timer à 40min - 4900kr</option>
                <option value="pt-10-55min_5400">10 timer à 55min - 5400kr</option>
                <option value="pt-20-40min_9500">20 timer à 40min - 9500kr (1900kr pr. Mnd.)</option>
                <option value="pt-20-55min_10500">20 timer à 55min - 10500kr (2100kr pr. Mnd.)</option>
              </optgroup>
            </select>
          </div>

          <div className="text-center">
            <button type="submit" className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded">
              Book nå
            </button>
          </div>
        </form>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Book;
