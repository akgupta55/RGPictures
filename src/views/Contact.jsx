import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="bg-blue-600 text-white py-12">
      <h2 className="text-3xl font-semibold text-center mb-6">Get in Touch</h2>
      <div className="flex flex-col md:flex-row justify-center gap-6 text-center">
        <div className="flex items-center gap-3">
          <FaPhone /> +91 6307155865
        </div>
        <div className="flex items-center gap-3">
          <FaEnvelope /> rg190559@gmail.com
        </div>
        <div className="flex items-center gap-3">
          <FaMapMarkerAlt /> Varanasi, UP
        </div>
      </div>
    </section>
  );
}
