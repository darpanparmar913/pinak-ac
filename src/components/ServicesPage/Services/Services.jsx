import React, { useEffect, useState } from "react";

const Services = () => {

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/service/service-list");
        const data = await res.json();
        console.log("Service list:", data);
      } catch (error) {
        console.error("Error fetching service list:", error);
      }
    };

    fetchServices();
  }, []);


  const [isLoading, setIsloading] = useState(false);

  function generateUnique7DigitNumber() {
    const generatedNumbers = new Set();

    while (true) {
      const min = 1000000;
      const max = 9999999;
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

      if (!generatedNumbers.has(randomNumber)) {
        generatedNumbers.add(randomNumber);
        return randomNumber;
      }
    }
  }

  // Example usage:
  const uniqueNumber = generateUnique7DigitNumber();

  const [formData, setFormData] = useState({
    uniqueNumber: uniqueNumber,
    fullName: "",
    address: "",
    mobileNumber: "",
    acType: "",
    problemSummary: "",
    paymentMethod: "",
    profit: 0
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsloading(true);

    try {
      // const res = await fetch("https://pinak-ac-backend-1.onrender.com/api/service/book", {
      const res = await fetch("http://localhost:5000/api/service/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setIsloading(false);
        alert("Service booked successfully!");
        setFormData({
          fullName: "",
          address: "",
          mobileNumber: "",
          acType: "",
          problemSummary: "",
          paymentMethod: ""
        });
      } else {
        setIsloading(false);
        alert("Something went wrong: " + data.message);
      }
    } catch (err) {
      setIsloading(false);
      alert("Error submitting form");
      console.error(err);
    }
  };

  return (
    <>
      <section className="max-w-3xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center text-[#030637] mb-8">Book AC Service</h2>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-xl p-6 space-y-6 border border-gray-200">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your full address"
              className="w-full border border-gray-300 rounded-md px-4 py-2 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
            <input
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              placeholder="e.g. +91 9876543210"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">AC Type</label>
            <select
              name="acType"
              value={formData.acType}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            >
              <option value="">-- Select AC Type --</option>
              <option value="split">Split AC</option>
              <option value="cassette">Cassette AC</option>
              <option value="window">Window AC</option>
              <option value="tower">Tower AC</option>
              <option value="ductable">Ductable AC</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Problem in AC (Summary)</label>
            <textarea
              name="problemSummary"
              value={formData.problemSummary}
              onChange={handleChange}
              placeholder="Briefly describe the issue"
              className="w-full border border-gray-300 rounded-md px-4 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Payment Method</label>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            >
              <option value="">-- Select Payment Method --</option>
              <option value="cashPayment">Cash Payment</option>
              <option value="onlinePayment">Online Payment</option>
            </select>
          </div>

          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-md shadow-md transition duration-200 cursor-pointer"
              disabled={isLoading ? true : false} >
              {isLoading ? "Loading..." : "Book Service Now"}
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Services;
