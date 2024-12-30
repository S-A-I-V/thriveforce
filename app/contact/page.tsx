export default function ContactPage() {
  return (
    <div className="container mx-auto py-16 px-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
      <form className="max-w-lg mx-auto space-y-6">
        <div>
          <label htmlFor="name" className="block text-lg font-medium mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full border border-gray-600 rounded-lg px-4 py-2 bg-gray-800 text-white"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg font-medium mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full border border-gray-600 rounded-lg px-4 py-2 bg-gray-800 text-white"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-lg font-medium mb-2">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            required
            className="w-full border border-gray-600 rounded-lg px-4 py-2 bg-gray-800 text-white"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-secondary transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
