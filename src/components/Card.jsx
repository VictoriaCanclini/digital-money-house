const Card = () => {
  return (
    <div className="bg-black w-[1000px] h-[230px] p-8 mt-6 mr-60 rounded-xl">
      <div className="text-white flex justify-end gap-2 mr-8 underline text-sm">
        <button>Ver tarjetas</button>
        <button>Ver CVU</button>
      </div>
      <h2 className="text-md text-white font-semibold">Dinero disponible</h2>
      <button className="border-2 border-[#C1FD35] text-xl rounded-full p-2 mt-6">
        $6.890.534,17
      </button>
    </div>
  );
};

export default Card;
