interface DestinationsProps {
  heading: string;
  para: string;
}

const Destinations: React.FC<DestinationsProps> = ({ heading, para }) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-2xl font-bold">{heading}</h3>
        <p className="text-gray-600">{para}</p>
        <button className="bg-orange-500 p-2 rounded-md text-white">
          BOOK NOW
        </button>
      </div>
    </div>
  );
};

export default Destinations;
