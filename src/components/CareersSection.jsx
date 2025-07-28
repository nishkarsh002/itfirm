import { useState } from "react";
import { roles } from "../data/navData";
import CareerForm from "./CareerForm";

export default function CareersSection() {
  const [showForm, setShowForm] = useState(null);
  const [showInfo , setShowInfo] = useState(false);

  const handleOpen = (id) => setShowForm(id);
  const handleClose = () => setShowForm(null);
 

  return (
    <>
      {/* Header Section */}
      {/* <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">Start your career at MyCompany</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Unlock opportunities to grow your career and skills with a passionate team. We foster an environment of learning, growth, and innovation.
          </p>
        </div>
      </section> */}

      {/* Open Positions Intro */}
      <div className="bg-gray-100 py-12 px-4 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Start your career at ItFirm</h2>
        <p className="text-gray-700 text-xl max-w-xl mx-auto">
          We're looking for talented engineers and tech enthusiasts who want to build great products and grow with us.
        </p>
        
      </div>

      <p className="text-center text-2xl font-bold py-4">Current Openings – Be a Part of Something Big</p>


      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-20 pb-20">
        {roles.map((role) => (
          <div key={role.id} className="bg-white rounded-xl shadow-md p-6 relative">
            <h3 className="text-xl font-bold text-blue-700 mb-2">{role.title}</h3>
            <p className="text-gray-600 mb-1">Openings: <strong>{role.openings}</strong></p>
            <p className="text-gray-600 mb-1">Minimum Experience(in years): <strong>
              {role.experience}</strong></p>
            <p className="text-gray-700 mb-4">{role.objective}</p>

            <div className="flex gap-2">

              <button
              onClick={() => handleOpen(role.id)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Apply
            </button>
              
            <button
              onClick={() => setShowInfo(showInfo === role.id ? null: role.id)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              {showInfo === role.id ? "Hide" : "More Info"}
            </button>
            </div>
            

            {/* Apply Form */}
            {showForm === role.id && (
             <CareerForm isOpen={true} onClose={handleClose} role={role}/>
            )}

            {showInfo === role.id && (
              <div className="mt-4 p-4 bg-gray-100 border-l-4 border-blue-600 rounded">
                <p className="text-sm text-gray-700">{role.details}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
