import React from "react";

const Navbar = () => {
  return (
    <div className="m-2 flex justify-between">
      <img src="/img/Logo 01.png" alt="Logo1" width={50} height={50} />
      <div className="">
        <button className="bg-black text-[#C1FD35] border-2">Ingresar</button>
        <button className="bg-[#C1FD35] text-black border-2">
          Crear cuenta
        </button>
      </div>
    </div>
  );
};

export default Navbar;
