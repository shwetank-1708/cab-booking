import main_1 from "../assets/main_1.png";

const Home = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${main_1})` }}
        className="h-[60vh] bg-cover bg-center"
      >
        <div>
          <h1 className="text-white">Uniyal Tour and Travel</h1>
          <p className="text-white">
            Easy Online Taxi Booking Service in Uttarakhand
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
