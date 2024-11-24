import about_sub from "../assets/about_sub.png";

const AboutSub = () => {
  return (
    <div>
      <div className="flex md:flex-row flex-col items-center justify-center m-[50px]">
        <div className="w-[500px] m-2">
          <img src={about_sub} />
        </div>

        <div className="w-[500px] m-2 border-2 shadow-2xl rounded-xl p-2">
          <h2 className="font-bold text-2xl py-2">
            About Uniyal Tour and Travel
          </h2>
          <p className="text-justify">
            Welcome to Uniyal Tour and Travel, your trusted companion for all
            your transportation needs across the picturesque landscapes of
            Uttarakhand. With a strong commitment to delivering top-notch
            service, we strive to make every journey a seamless and memorable
            experience for our customers. Whether you’re venturing into the
            majestic hill stations, embarking on a spiritual pilgrimage, or
            simply seeking a reliable ride from the airport, Uniyal Tour and
            Travel is dedicated to offering safe, comfortable, and personalized
            travel solutions.
          </p>
          <p className="text-justify">
            Over the years, Uniyal Tour and Travel has built a solid reputation
            as one of the premier taxi service providers in Uttarakhand. Our
            expertise in the industry, combined with our dedication to customer
            satisfaction, has made us a trusted name known for reliability,
            safety, and quality service. We boast a fleet of modern,
            well-maintained vehicles that cater to various needs, from solo
            travellers to families and groups, ensuring that your journey with
            us is as comfortable as it is secure.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSub;
