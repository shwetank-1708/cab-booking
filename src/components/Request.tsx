const Request = () => {
  return (
    <div className="xl:w-[30%] md:w-[70%] w-[100%] p-10">
      <div className="bg-white p-10">
        <form className="flex flex-col">
          <h4 className="font-bold text-2xl my-2">Request Call Back</h4>
          <input
            type="text"
            placeholder="Your Name"
            className="border-2 my-2 p-2"
          />
          <input
            type="number"
            placeholder="Your Phone Number"
            className="border-2 my-2 p-2"
          />
          <input
            type="text"
            placeholder="Pick Up Location"
            className="border-2 my-2 p-2"
          />
          <input
            type="text"
            placeholder="Drop Location"
            className="border-2 my-2 p-2"
          />
          <textarea placeholder="Your Message" className="border-2 my-2 p-2" />
          <button className="bg-orange-500 p-2 rounded-md text-white my-2">
            BOOK NOW
          </button>
        </form>
      </div>
    </div>
  );
};

export default Request;
