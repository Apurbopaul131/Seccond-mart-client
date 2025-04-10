import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Youtube } from "lucide-react";

const ContactDetails = () => {
  return (
    <div className="grid items-center grid-cols-2 gap-8 container mx-auto my-20">
      <section className="px-4">
        <Button className="mb-4 px-6 py-2 text-sm bg-secondary hover:bg-blue-700 text-white rounded-md">
          How Can We Help?
        </Button>

        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
          We Are Ready to Help
        </h2>

        <p className="text-gray-500 dark:text-gray-300 mb-6">
          Check our Q&amp;A guidelines to see if your question has already been
          answered. If not, please contact us and we will get back to you as
          soon as possible.
        </p>

        <div className="flex justify-start gap-4">
          <a
            href="#"
            className="p-3 rounded-full border border-gray-300 hover:bg-blue-100 transition"
          >
            <Facebook className="text-blue-600" />
          </a>
          <a
            href="#"
            className="p-3 rounded-full border border-gray-300 hover:bg-pink-100 transition"
          >
            <Instagram className="text-pink-500" />
          </a>
          <a
            href="#"
            className="p-3 rounded-full border border-gray-300 hover:bg-red-100 transition"
          >
            <Youtube className="text-red-600" />
          </a>
        </div>
      </section>
      <div>
        <div className="flex justify-center items-center min-h-screen bg-gray-500 px-4 rounded-lg">
          <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
            <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Message</label>
                <textarea
                  name="message"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  rows={4}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-secondary hover:bg-blue-600 text-white py-2 rounded-md transition"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
