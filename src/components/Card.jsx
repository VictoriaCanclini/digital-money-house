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
    <div className="bg-black md:w-[1000px] sm:w-[500px] w-[300px] md:h-[230px] h-[250px] p-6 mt-6 rounded-xl">
      <div className="text-white flex justify-end gap-4 underline text-sm">
        <button>{button1Text}</button>
        <button>{button2Text}</button>
      </div>
      <h2 className="text-md text-white font-semibold mb-4 mt-4">{title}</h2>
      {amount && (
        <button className="border-2 border-[#C1FD35] text-xl rounded-full p-2 mt-6">
          {amount}
        </button>
      )}
      <div className="flex flex-col mr-[900px] gap-1 text-[#C1FD35] text-lg">
        <div className="flex justify-between">
          <button>{button3Text}</button>
          <span className="ml-[860px]">{icon}</span>
        </div>
        <span className="text-white text-sm">{number1}</span>
        <div className="flex justify-between">
          <button>{button4Text}</button>
          <span className="ml-[860px]">{icon}</span>
        </div>
        <span className="text-white text-sm">{number2}</span>
      </div>
    </div>
  );
};

export default Card;
