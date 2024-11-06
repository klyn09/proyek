import React from 'react';

const Footer = () => {
  const handleClick = (link) => {
    // Implementasikan logika navigasi jika diperlukan
    console.log(`Navigating to ${link}`);
  };

  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Desa Sindanglaka
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <button 
            onClick={() => handleClick('privacy-policy')} 
            className="text-gray-300 hover:text-gray-400 focus:outline-none"
          >
            Privacy Policy
          </button>
          <button 
            onClick={() => handleClick('terms-of-service')} 
            className="text-gray-300 hover:text-gray-400 focus:outline-none"
          >
            Terms of Service
          </button>
          <button 
            onClick={() => handleClick('contact-us')} 
            className="text-gray-300 hover:text-gray-400 focus:outline-none"
          >
            Contact Us
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
