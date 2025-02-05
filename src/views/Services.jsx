import { getServices } from "../controllers/serviceController";
import ServiceCard from "../components/ServiceCard";

export default function Services() {
  const services = getServices();

  return (
    <section id="services" className="py-12 text-center">
      <h2 className="text-3xl font-semibold mb-8">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-6 px-6">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} desc={service.desc} />
        ))}
      </div>
    </section>
  );
}
