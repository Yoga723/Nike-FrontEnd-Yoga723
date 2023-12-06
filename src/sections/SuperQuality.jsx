import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex flex-1 max-lg:flex-col flex-row max-lg:gap-20 lg:gap-48 items-center max-container w-full"
    >
      <div className="flex flex-col max-w-lg">
        <h2 className="text-4xl font-bold font-palanquin">
          We Provide You <span className="text-coral-red">Super Quality</span>{" "}
          Shoes
        </h2>
        <p className="max-w-lg my-4 info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Out dedication to detail and excellence ensure your satisfaction
        </p>
        <div className="mt-8">
          <Button label={"View Details"} />
        </div>
      </div>
      <img
        src={shoe8}
        alt="colorful shoe"
        width={570}
        height={570}
        className="object-contain"
      />
    </section>
  );
};

export default SuperQuality;
