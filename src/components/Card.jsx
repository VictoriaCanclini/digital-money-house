import Link from "next/link";
import { useSelector } from "react-redux";

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
  onCopy,
}) => {
  const { user_id } = useSelector((state) => state.auth);

  return (
    <div className="bg-black md:w-[1000px] sm:w-[500px] w-[300px] md:h-[230px] h-[300px] p-6 rounded-xl mt-6">
      <div className="text-white flex justify-end gap-4 text-sm">
        <Link href="/credit-card">
          <button className="underline">{button1Text}</button>
        </Link>
        <Link href={`/profile/${user_id}`}>
          <button className="underline">{button2Text}</button>
        </Link>
      </div>
      <h2 className="text-lg text-white font-semibold md:mb-2 mb-8 md:mt-1 mt-2">
        {title}
      </h2>
      {amount && (
        <button className="border-2 border-[#C1FD35] text-xl rounded-full p-2 mt-6">
          {amount}
        </button>
      )}
      <div className="flex flex-col mr-[900px] gap-1 text-[#C1FD35] text-lg">
        <div className="flex justify-between">
          <button>{button3Text}</button>{" "}
          <button
            onClick={() => onCopy(number1)}
            className="md:ml-[860px] ml-[180px]"
          >
            {icon}
          </button>
        </div>
        <span className="text-white text-sm">{number1}</span>
        <div className="flex justify-between">
          <button>{button4Text}</button>{" "}
          <button
            onClick={() => onCopy(number2)}
            className="md:ml-[860px] ml-[180px]"
          >
            {icon}
          </button>
        </div>
        <span className="text-white text-sm">{number2}</span>
      </div>
    </div>
  );
};

export default Card;
