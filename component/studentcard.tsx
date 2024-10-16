import React from 'react';

interface StudentCardProps {
  name: string;
  age: number;
  rollNumber: string;
  studentClass: string;
  image: string;
}

const StudentCard: React.FC<StudentCardProps> = ({ name, age, rollNumber, studentClass, image }) => {
  return (
    <div className="bg-teal-600 border border-gray-400 rounded-lg shadow-xl p-6 transition-transform transform hover:scale-105 m-4 w-72 h-auto">
      <h2 className="font-bold text-white mb-4 text-center"><b>ID Card</b></h2>

      {/* Image Display */}
      <div className="flex justify-center mb-4">
        <img src={image} alt={`${name}'s profile`} className="w-24 h-24 rounded-full object-cover" />
      </div>

      <div className="text-white text-left">
        {/* For alignment, use a fixed width for labels */}
        <div className="mb-2 flex">
          <span className="font-bold w-24">Name:</span>
          <span>{name}</span>
        </div>
        <div className="mb-2 flex">
          <span className="font-bold w-24">Age:</span>
          <span>{age}</span>
        </div>
        <div className="mb-2 flex">
          <span className="font-bold w-24">Roll Number:</span>
          <span>{rollNumber}</span>
        </div>
        <div className="mb-2 flex">
          <span className="font-bold w-24">Class:</span>
          <span>{studentClass}</span>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
