import React from "react";

const ClientNumber = () => {
  return (
    <section
      className="bg-[url('/images/happy-client-img.jpg')] bg-fixed bg-cover bg-center bg-no-repeat"
    >
      {/* Overlay */}
      <div className="bg-[#1f467fcc]/90 w-full h-full">
        <div className="container mx-auto py-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {/* Stat Item */}
          <div>
            <h2 className="text-[34px] sm:text-[45px] font-bold">450+</h2>
            <p className="text-orange-500 mt-2">Happy Clients</p>
          </div>
          <div>
            <h2 className="text-[34px] sm:text-[45px] font-bold">450+</h2>
            <p className="text-orange-500 mt-2">Projects Succeed</p>
          </div>
          <div>
            <h2 className="text-[34px] sm:text-[45px] font-bold">7</h2>
            <p className="text-orange-500 mt-2">Years of Experience</p>
          </div>
          <div>
            <h2 className="text-[34px] sm:text-[45px] font-bold">10</h2>
            <p className="text-orange-500 mt-2">Team Members</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientNumber;
