import img1 from "../../assets/images/banner/1.jpg";
import img2 from "../../assets/images/banner/2.jpg";
import img3 from "../../assets/images/banner/3.jpg";
import img4 from "../../assets/images/banner/4.jpg";
import img5 from "../../assets/images/banner/5.jpg";
import img6 from "../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full md:h-[600px]">
        <img src={img1} className="w-full rounded-xl" />
        <div className="absolute flex items-end left-0 top-0 h-full rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
         <div className="text-white px-6 shadow-2xl space-y-5 md:p-10 md:ml-10">
            <h2 className="text-5xl font-bold ">Affordable Price <br /> For Car Servicing</h2>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className="my-3">
                <button className="btn btn-secondary mr-5">Discover More</button>
                <button className="btn btn-outline btn-secondary"> Latest Project</button>
            </div>
         </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide6" className="btn btn-circle mr-6">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full md:h-[600px]">
        <img src={img2} className="w-full rounded-xl " />
        <div className="absolute flex items-end left-0 top-0 h-full rounded-xl  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
         <div className="text-white px-6 shadow-2xl space-y-5 md:p-10 md:ml-10">
            <h2 className="text-5xl font-bold ">Affordable Price <br /> For Car Servicing</h2>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className="my-3">
                <button className="btn btn-secondary mr-5">Discover More</button>
                <button className="btn btn-outline btn-secondary"> Latest Project</button>
            </div>
         </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle mr-6">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full md:h-[600px]">
        <img src={img3} className="w-full" />
        <div className="absolute flex items-end left-0 top-0 h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
         <div className="text-white px-6 shadow-2xl space-y-5 md:p-10 md:ml-10">
            <h2 className="text-5xl font-bold ">Affordable Price <br /> For Car Servicing</h2>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className="my-3">
                <button className="btn btn-secondary mr-5">Discover More</button>
                <button className="btn btn-outline btn-secondary"> Latest Project</button>
            </div>
         </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle mr-6">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full md:h-[600px]">
        <img src={img4} className="w-full" />
        <div className="absolute flex items-end left-0 top-0 h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
         <div className="text-white px-6 shadow-2xl space-y-5 md:p-10 md:ml-10">
            <h2 className="text-5xl font-bold ">Affordable Price <br /> For Car Servicing</h2>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className="my-3">
                <button className="btn btn-secondary mr-5">Discover More</button>
                <button className="btn btn-outline btn-secondary"> Latest Project</button>
            </div>
         </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle mr-6">
            ❮
          </a>
          <a href="#slide5" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full md:h-[600px]">
        <img src={img5} className="w-full" />
        <div className="absolute flex items-end left-0 top-0 h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
         <div className="text-white px-6 shadow-2xl space-y-5 md:p-10 md:ml-10">
            <h2 className="text-5xl font-bold ">Affordable Price <br /> For Car Servicing</h2>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className="my-3">
                <button className="btn btn-secondary mr-5">Discover More</button>
                <button className="btn btn-outline btn-secondary"> Latest Project</button>
            </div>
         </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle mr-6">
            ❮
          </a>
          <a href="#slide6" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full md:h-[600px]">
        <img src={img6} className="w-full" />
        <div className="absolute flex items-end left-0 top-0 h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
         <div className="text-white px-6 shadow-2xl space-y-5 md:p-10 md:ml-10">
            <h2 className="text-5xl font-bold ">Affordable Price <br /> For Car Servicing</h2>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className="my-3">
                <button className="btn btn-secondary mr-5">Discover More</button>
                <button className="btn btn-outline btn-secondary"> Latest Project</button>
            </div>
         </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide5" className="btn btn-circle mr-6">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
     
    </div>
  );
};

export default Banner;
