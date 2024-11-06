import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Kontak Kami</h2>
        <p className="text-lg text-gray-700 mb-8">Hubungi kami untuk informasi lebih lanjut.</p>
        <a href="mailto:desa@example.com" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500">Email Kami</a>
      </div>
    </section>
  );
};

export default Contact;
