export default function TeamPage() {
    return (
      <div className="container mx-auto py-16 px-6">
        <h1 className="text-3xl font-bold mb-6">Meet Our Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition duration-300">
            <img
              src="/team1.jpg"
              alt="Team Member 1"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-gray-600">Team Lead</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition duration-300">
            <img
              src="/team2.jpg"
              alt="Team Member 2"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Jane Smith</h3>
            <p className="text-gray-600">Mechanical Engineer</p>
          </div>
        </div>
      </div>
    );
  }
  