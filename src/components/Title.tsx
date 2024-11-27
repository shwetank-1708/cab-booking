interface TitleProps {
  heading: string;
}

const Title: React.FC<TitleProps> = ({ heading }) => {
  return (
    <div className="flex justify-center m-11">
      <div className="text-4xl font-bold text-gray-600">{heading}</div>
    </div>
  );
};

export default Title;
