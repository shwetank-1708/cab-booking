interface DestinationsProps {
  heading: string;
  para: string;
}

const Destinations: React.FC<DestinationsProps> = ({ heading, para }) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center p-5 bg-blue-50">
        <h3 className="text-2xl p-4">{heading}</h3>
        <p className="text-gray-600 pb-4">{para}</p>
        <button className="bg-orange-500 p-2 rounded-md text-white">
          BOOK NOW
        </button>
      </div>
    </div>
  );
};

export default Destinations;
