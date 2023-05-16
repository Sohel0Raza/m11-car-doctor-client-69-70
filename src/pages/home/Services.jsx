import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="text-center space-y-3 md:p-8">
        <h5 className="font-bold text-secondary mt-8 ">Service</h5>
        <h2 className="font-bold text-3xl">Our Service Area</h2>
        <p className="px-5">
          The majority have suffered alteration in some form, by injected
          humour,or randomised <br /> words which do not look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-10">
        {
            services.map(service => <ServiceCard
            key={service._id}
            service={service}
            ></ServiceCard>)
        }
      </div>
    </div>
  );
};

export default Services;
