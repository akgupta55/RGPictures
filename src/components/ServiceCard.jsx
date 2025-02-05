import { motion } from "framer-motion";
import { FaCamera } from "react-icons/fa";

export default function ServiceCard({ title, desc }) {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-lg"
      whileHover={{ scale: 1.05 }}
    >
      <div className="text-4xl mb-4 text-blue-500">
        <FaCamera />
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{desc}</p>
    </motion.div>
  );
}
