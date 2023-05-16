import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  console.log(service);
  const { _id, title, img, price } = service;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">      
        <div className="h-60">
        <img
            className="px-5 pt-5"
            src={img}
            alt="Shoes"
          />
        </div>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="flex justify-between items-center">
          <p className="font-bold text-secondary">Price: {price}$</p>
          <Link to={`/checkOut/${_id}`}>
            <button className="btn-outline btn-secondary hover:p-2 rounded-md"><AiOutlineArrowRight/></button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
