import StudentCard from '../../component/studentcard';

export default function Home() {
  const students = [
    { name: 'Muhammad Momin', age: 22, rollNumber: '16095', studentClass: '12A', image: '/images/download.jpeg' },
    { name: 'Mian Umer', age: 21, rollNumber: '16014', studentClass: '11B', image: '/images/download (1).jpeg' },
    { name: 'Waleed Khan', age: 23, rollNumber: '16095', studentClass: '12C', image: '/images/download (2).jpeg' },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-800 p-4">
      <h1 className="text-3xl text-white mb-6">Student ID Cards</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-screen-lg">
        {students.map((student) => (
          <StudentCard
            key={student.rollNumber}
            name={student.name}
            age={student.age}
            rollNumber={student.rollNumber}
            studentClass={student.studentClass}
            image={student.image}
          />
        ))}
      </div>
    </div>
  );
}
