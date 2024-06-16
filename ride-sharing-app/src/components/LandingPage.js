import React from 'react';
import { Link } from 'react-router-dom';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-24 px-8 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold mb-4">Ride Sharing App</h1>
        <p className="text-xl mb-8 text-center">
          Find and offer rides to your destination with ease.
        </p>
        <div className="space-x-4">
          <Link
            to="/login"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          >
            Register
          </Link>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-white py-16 px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="flex-1 mb-8 md:mb-0 md:mr-8">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.netsolutions.com%2Finsights%2Fwp-content%2Fuploads%2F2019%2F07%2Fbuilding-a-ride-sharing-app-essential-features-to-include.jpg&f=1&nofb=1&ipt=ed9273f21e7ee3cc68f383fe7cc332212992a582e4a81dcd14d5f61afdbec541&ipo=images"
              alt="How It Works"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="flex-1">
            <ol className="list-decimal list-inside space-y-4">
              <li>
                <h3 className="text-xl font-bold mb-2">Sign Up</h3>
                <p>
                  Create an account with Ride Sharing App to get started.
                </p>
              </li>
              <li>
                <h3 className="text-xl font-bold mb-2">Find or Offer Rides</h3>
                <p>
                  Search for available rides or post your own ride offer.
                </p>
              </li>
              <li>
                <h3 className="text-xl font-bold mb-2">Book or Accept</h3>
                <p>
                  Book a seat or accept riders for your ride.
                </p>
              </li>
              <li>
                <h3 className="text-xl font-bold mb-2">Travel Safely</h3>
                <p>
                  Enjoy a safe and convenient ride with our trusted community.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16 px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Find Rides</h3>
            <p>
              Search for available rides to your destination and book a seat
              with just a few clicks.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Offer Rides</h3>
            <p>
              Share your ride and earn extra money by offering seats to others
              headed in the same direction.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Safe and Secure</h3>
            <p>
              Our platform prioritizes safety and security, with built-in
              features to ensure a smooth and reliable experience.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-100 py-16 px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Testimonials</h2>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-md mb-8 md:mb-0 md:mr-8">
            <p className="text-lg mb-4">
              "Ride Sharing App has been a game-changer for me. I've saved so
              much money and time on my daily commute."
            </p>
            <p className="text-sm font-bold">- John Doe</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg mb-4">
              "I love the convenience and flexibility of offering rides through
              this app. It's a great way to earn some extra cash."
            </p>
            <p className="text-sm font-bold">- Jane Smith</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-500 text-white py-16 px-8 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Sharing Rides?</h2>
        <p className="text-lg mb-8 text-center">Join our community and experience the convenience and cost-savings of ride sharing.</p>
        <Link to="/register" className="bg-white text-blue-500 hover:bg-gray-100 font-bold py-2 px-4 rounded">
          Sign Up Now
        </Link>
      </div>

      {/* Newsletter Section */}
      <div className="bg-white py-16 px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Stay Updated</h2>
        <p className="text-lg mb-8 text-center">Subscribe to our newsletter to receive the latest updates and promotions.</p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="py-2 px-4 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r-md">
            Subscribe
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-100 py-16 px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Stats</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <h3 className="text-4xl font-bold mb-2">10,000+</h3>
            <p className="text-lg">Registered Users</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <h3 className="text-4xl font-bold mb-2">25,000+</h3>
            <p className="text-lg">Completed Rides</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <h3 className="text-4xl font-bold mb-2">$500,000+</h3>
            <p className="text-lg">Total Savings</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white py-16 px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="flex-1 mb-8 md:mb-0 md:mr-8">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F003%2F159%2F741%2Foriginal%2Fride-sharing-concept-icon-vector.jpg&f=1&nofb=1&ipt=ac759fc42e525a402c7218282c968366e635839c5571c7dd8d5989c5531903fd&ipo=images"
              alt="Contact Us"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="flex-1">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block font-bold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-100 py-16 px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <img
              src="https://img.freepik.com/premium-vector/vector-professional-icon-business-illustration-line-symbol-people-management-career-set-c_1013341-78521.jpg?size=626&ext=jpg&ga=GA1.1.50336131.1718162374&semt=ais_user"
              alt="Team Member 1"
              className="w-24 h-24 rounded-full mb-4"
            />
            <h3 className="text-xl font-bold mb-2">John Doe</h3>
            <p className="text-sm">CEO & Founder</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <img
              src="https://img.freepik.com/premium-photo/profile-icon-white-background_941097-161604.jpg?size=626&ext=jpg&ga=GA1.1.50336131.1718162374&semt=ais_user"
              alt="Team Member 2"
              className="w-24 h-24 rounded-full mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Jane Smith</h3>
            <p className="text-sm">CTO</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <img
              src="https://img.freepik.com/premium-photo/profile-icon-white-background_941097-162649.jpg?size=626&ext=jpg&ga=GA1.1.50336131.1718162374&semt=ais_user"
              alt="Team Member 3"
              className="w-24 h-24 rounded-full mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Michael Johnson</h3>
            <p className="text-sm">Lead Developer</p>
          </div>
        </div>
      </div>

      {/* FAQs Section */}
<div className="bg-gray-100 py-16 px-8">
  <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
  <div className="max-w-3xl mx-auto">
    <div className="mb-6">
      <h3 className="text-xl font-bold mb-2">How does the ride sharing process work?</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna in gravida vehicula, lorem nunc
        faucibus velit, vel maximus sapien nibh vel ante.
      </p>
    </div>
    <div className="mb-6">
      <h3 className="text-xl font-bold mb-2">What safety measures are in place?</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna in gravida vehicula, lorem nunc
        faucibus velit, vel maximus sapien nibh vel ante.
      </p>
    </div>
    <div className="mb-6">
      <h3 className="text-xl font-bold mb-2">How are payments handled?</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna in gravida vehicula, lorem nunc
        faucibus velit, vel maximus sapien nibh vel ante.
      </p>
    </div>
  </div>
</div>


      

      {/* Community Section */}
      <div className="bg-gray-900 text-white py-16 px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Join Our Community</h2>
        <p className="text-lg mb-8 text-center">
          Connect with like-minded individuals who share your passion for sustainable transportation and cost-saving opportunities.
        </p>
        <div className="flex justify-center">
          <Link
            to="/community"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          >
            Explore Community
          </Link>
        </div>
      </div>

      {/* Blog Section */}
      <div className="bg-white py-16 px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmottpoll.org%2Fsites%2Fdefault%2Ffiles%2F2019-04%2F041519_RideSharing.png&f=1&nofb=1&ipt=0ae01b8c08e2cfebfa71be8366a3e335c7702be474e53f81688698c8e7fa40ff&ipo=images"
              alt="Blog Post 1"
              className="mb-4 rounded-lg"
            />
            <h3 className="text-xl font-bold mb-2">ride share 1</h3>
            <p className="mb-4">
            Are ride sharing services safe for teens? | National Poll on Children's..
            </p>
            <Link
              to="/blog/post-1"
              className="text-blue-500 hover:text-blue-600 font-bold"
            >
              Read More
            </Link>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2I8Yos8a0vDOaxoFJpq8kgHaFx%26pid%3DApi&f=1&ipt=06f1e53a84e20645beb3cad0812ec30a131c68aadcd2c052d7466321287ae124&ipo=images"
              alt="Blog Post 2"
              className="mb-4 rounded-lg"
            />
            <h3 className="text-xl font-bold mb-2">rivalries </h3>
            <p className="mb-4">
              A real compitators in the market place
            </p>
            <Link
              to="/blog/post-2"
              className="text-blue-500 hover:text-blue-600 font-bold"
            >
              Read More
            </Link>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.JzrQfGELjGqUP4ypwyNm6wHaE8%26pid%3DApi&f=1&ipt=d8fc26bd0261e05c8796efee4da6a717adcf72c48d698f2f5de944ff008eb1b7&ipo=images"
              alt="Blog Post 3"
              className="mb-4 rounded-lg"
            />
            <h3 className="text-xl font-bold mb-2">benefits of ride sharing</h3>
            <p className="mb-4">
              save the nature by using the ride sharing..
            </p>
            <Link
              to="/blog/post-3"
              className="text-blue-500 hover:text-blue-600 font-bold"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>


      {/* Download Section */}
      {/*
      <div className="bg-white py-16 px-8 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-8">Download our App</h2>
        <p className="text-lg mb-8 text-center">
          Get the Ride Sharing App on your mobile device and start your journey
          today!
        </p>
        <div className="flex space-x-4">
          
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white font-bold py-2 px-4 rounded flex items-center"
          >
            <FontAwesomeIcon icon={faApple} className="mr-2" />
            <span>App Store</span>
          </a>
          
            href="https://play.google.com/store/apps"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white font-bold py-2 px-4 rounded flex items-center"
          >
            <FontAwesomeIcon icon={faGooglePlay} className="mr-2" />
            <span>Google Play</span>
          </a>
        </div>
      </div>*/}


{/* Footer */}
<footer className="bg-gray-900 text-white py-16 px-8">
  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
    <div>
      <h4 className="text-xl font-bold mb-4">Ride Sharing App</h4>
      <p className="mb-4">

Get Anywhere, Together &
Ride, Share, Connect.
      </p>
      <div className="flex space-x-4">
        <a href="#" className="text-white hover:text-gray-300">
          <i className="fab fa-facebook fa-lg"></i>
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          <i className="fab fa-twitter fa-lg"></i>
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          <i className="fab fa-instagram fa-lg"></i>
        </a>
      </div>
    </div>
    <div>
      <h4 className="text-xl font-bold mb-4">Quick Links</h4>
      <ul>
        <li className="mb-2">
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/about" className="text-white hover:text-gray-300">
            About
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/features" className="text-white hover:text-gray-300">
            Features
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/contact" className="text-white hover:text-gray-300">
            Contact
          </Link>
        </li>
      </ul>
    </div>
    <div>
      <h4 className="text-xl font-bold mb-4">Support</h4>
      <ul>
        <li className="mb-2">
          <Link to="/faq" className="text-white hover:text-gray-300">
            FAQ
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/help" className="text-white hover:text-gray-300">
            Help Center
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/terms" className="text-white hover:text-gray-300">
            Terms of Service
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/privacy" className="text-white hover:text-gray-300">
            Privacy Policy
          </Link>
        </li>
      </ul>
    </div>
    <div>
      <h4 className="text-xl font-bold mb-4">Subscribe</h4>
      <p className="mb-4">
        Subscribe to our newsletter to receive the latest updates and promotions.
      </p>
      <div className="flex">
        <input
          type="email"
          placeholder="Enter your email"
          className="py-2 px-4 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r-md">
          Subscribe
        </button>
      </div>
    </div>
  </div>
  <div className="mt-8 text-center">
    <p>&copy; {new Date().getFullYear()} Ride Sharing App. All rights reserved.</p>
  </div>
</footer>
</div>
);
};


export default LandingPage;