import person from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className=" md:w-3/5 relative">
            <img src={person} className="w-3/4 h-full rounded-lg shadow-2xl" />
            <img src={parts} className="w-1/2 absolute right-12 top-1/2 border-8 border-white rounded-lg shadow-2xl" />
          </div>
          <div className="md:w-2/5 py-7 pr-10">
            <h5 className="my-5 font-bold text-secondary">About Us</h5>
            <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
            <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
            </p>
            <p>
            the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
            </p>
            <button className="btn btn-secondary mt-5">Get More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
