"use client";

import React, { useEffect, useState } from "react";

const Betaling: React.FC = () => {
  const [service, setService] = useState<string | null>(null);
  const [price, setPrice] = useState<string | null>(null);
  const [date, setDate] = useState<string | null>(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setService(urlParams.get("service"));
    setPrice(urlParams.get("price"));
    setDate(urlParams.get("date"));
  }, []);

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center text-black">Legg inn kortinformasjon</h2>

        {/* Kortinformasjon skjema */}
        <form id="paymentForm" className="space-y-4">
          {/* Display selected service, price, and optionally date */}
          <div className="text-center text-lg font-medium text-black mb-4">
            {service && price && (
              <div>
                <p>Valgt tjeneste: {service}</p>
                <p>Pris: Kr {price},-</p>
                {date && <p>Dato: {date}</p>}
              </div>
            )}
          </div>

          {/* Kortnummer */}
          <div>
            <label htmlFor="cardNumber" className="block text-lg font-medium text-black">
              Kortnummer
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 text-black placeholder:text-black opacity-50"
              placeholder="1234 5678 9012 3456"
              maxLength={16}
              pattern="\d{16}"
              required
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "");
              }}
            />
          </div>

          {/* Utløpsdato */}
          <div>
            <label htmlFor="expiryDate" className="block text-lg font-medium text-black">
              Utløpsdato
            </label>
            <div className="flex space-x-2">
              <select
                id="expiryMonth"
                name="expiryMonth"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 text-black"
                required
              >
                <option value="" disabled selected>
                  Måned
                </option>
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i} value={String(i + 1).padStart(2, "0")}>
                    {String(i + 1).padStart(2, "0")}
                  </option>
                ))}
              </select>

              <select
                id="expiryYear"
                name="expiryYear"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 text-black"
                required
              >
                <option value="" disabled selected>
                  År
                </option>
                {Array.from({ length: 11 }, (_, i) => (
                  <option key={i} value={currentYear + i}>
                    {currentYear + i}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* CVC */}
          <div>
            <label htmlFor="cvc" className="block text-lg font-medium text-black">
              CVC
            </label>
            <input
              type="text"
              id="cvc"
              name="cvc"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 text-black placeholder:text-black opacity-50"
              placeholder="123"
              maxLength={3}
              pattern="\d{3}"
              required
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "");
              }}
            />
          </div>

          {/* Bekreft betaling knapp */}
          <div className="text-center">
            <a href="Medlemskap.html">
              <button type="submit" className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded">
                Bekreft betaling
              </button>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Betaling;
