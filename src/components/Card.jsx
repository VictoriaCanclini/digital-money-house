import { Copy } from "@/common/Icons";

const Card = ({
  title,
  button1Text,
  button2Text,
  button3Text,
  button4Text,
  number1,
  number2,
  amount,
  icon,
}) => {
  return (
    <div className="bg-black md:w-[1000px] sm:w-[500px] w-[300px] md:h-[230px] h-[250px] p-8 mt-6 mr-60 rounded-xl">
      <div className="text-white flex justify-end gap-2 mr-8 underline text-sm">
        <button>{button1Text}</button>
        <button>{button2Text}</button>
      </div>
      <h2 className="text-sm text-white font-semibold">{title}</h2>
      <button className="border-2 border-[#C1FD35] text-xl rounded-full p-2 mt-6">
        {amount}
      </button>
      <div className="flex flex-col mr-[900px] gap-1 text-[#C1FD35] text-lg">
        <div className="flex flex-row">
          <button>{button3Text}</button>
          {icon}
        </div>
        <spam className="text-white text-sm">{number1}</spam>
        <button>{button4Text}</button>
        <spam className="text-white text-sm">{number2}</spam>
      </div>
    </div>
  );
};

export default Card;
