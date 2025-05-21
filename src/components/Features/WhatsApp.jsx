import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '918866397377'; // Replace with your WhatsApp number
  const message = 'Hi, I need help with tax filing!';
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center z-50 transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
     <strong className='mr-2'>Chat With Us</strong> <MessageCircle className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppButton;
