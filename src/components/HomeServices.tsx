interface HomeServicesProps {
  heading: string;
  para: string;
}

const HomeServices: React.FC<HomeServicesProps> = ({ heading, para }) => {
  return (
    <div>
      <h1 className="text-xl font-bold m-2 text-blue-900">{heading}</h1>
      <p className="text-gray-600">{para}</p>
    </div>
  );
};

export default HomeServices;
