import image from "../../assets/imgCard.png";

const cardData = [
  {
    title: "Screen 1",
    description:
      "2 sided Overhead Bridge Billboard at Federal Highway, Mid Valley",
    location: "Jalan Kuching, Kuala Lumpur (KL)",
    value: "RM330",
    discount: "-34%",
  },
  {
    title: "Screen 2",
    description:
      "2 sided Overhead Bridge Billboard at Federal Highway, Mid Valley",
    location: "Jalan Kuching, Kuala Lumpur (KL)",
    value: "RM330",
    discount: "-33%",
  },
  {
    title: "Screen 3",
    description:
      "2 sided Overhead Bridge Billboard at Federal Highway, Mid Valley",
    location: "Jalan Kuching, Kuala Lumpur (KL)",
    value: "RM330",
    discount: "-33%",
  },
  {
    title: "Screen 4",
    description:
      "2 sided Overhead Bridge Billboard at Federal Highway, Mid Valley",
    location: "Jalan Kuching, Kuala Lumpur (KL)",
    value: "RM330",
    discount: "-33%",
  },
  {
    title: "Screen 5",
    description:
      "2 sided Overhead Bridge Billboard at Federal Highway, Mid Valley",
    location: "Jalan Kuching, Kuala Lumpur (KL)",
    value: "RM330",
    discount: "-33%",
  },
  {
    title: "Screen 6",
    description:
      "2 sided Overhead Bridge Billboard at Federal Highway, Mid Valley",
    location: "Jalan Kuching, Kuala Lumpur (KL)",
    value: "RM330",
    discount: "-33%",
  },
  {
    title: "Screen 7",
    description:
      "2 sided Overhead Bridge Billboard at Federal Highway, Mid Valley",
    location: "Jalan Kuching, Kuala Lumpur (KL)",
    value: "RM330",
    discount: "-33%",
  },
  {
    title: "Screen 8",
    description:
      "2 sided Overhead Bridge Billboard at Federal Highway, Mid Valley",
    location: "Jalan Kuching, Kuala Lumpur (KL)",
    value: "RM330",
    discount: "-33%",
  },
  {
    title: "Screen 9",
    description:
      "2 sided Overhead Bridge Billboard at Federal Highway, Mid Valley",
    location: "Jalan Kuching, Kuala Lumpur (KL)",
    value: "RM330",
    discount: "-33%",
  },
  {
    title: "Screen 10",
    description:
      "2 sided Overhead Bridge Billboard at Federal Highway, Mid Valley",
    location: "Jalan Kuching, Kuala Lumpur (KL)",
    value: "RM330",
    discount: "-33%",
  },
  {
    title: "Screen 11",
    description:
      "2 sided Overhead Bridge Billboard at Federal Highway, Mid Valley",
    location: "Jalan Kuching, Kuala Lumpur (KL)",
    value: "RM330",
    discount: "-33%",
  },
  {
    title: "Screen 12",
    description:
      "2 sided Overhead Bridge Billboard at Federal Highway, Mid Valley",
    location: "Jalan Kuching, Kuala Lumpur (KL)",
    value: "RM330",
    discount: "-34%",
  },
];

export default function ScreenCards() {
  return (
    <div className="flex flex-wrap justify-center">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="max-w-sm overflow-hidden border-4 rounded-lg shadow-lg w-[295px] h-[471px] "
        >
          <img className="px-4 py-4 w-[266] h-[208]" src={image} alt="image" />
          <div className="px-4 py-6 ">
            <div>
              <div>{card.title}</div>
              <div>{card.description}</div>
              <div>{card.location}</div>
            </div>
            <div className="mt-4 border border-b-2 border-gray-300 w-[266]"></div>
            <div className="text-[#FA6338]  text-end mb-6 flex item-end mt-4 ">
              <p className="mr-3">{card.value}</p>
              <p className="px-4 border-2 border-orange-600">{card.discount}</p>
            </div>
            <div className=" rounded-lg bg-[#FC1481] ">
              <button className="w-64 h-12 text-xl ">Add to Card</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
