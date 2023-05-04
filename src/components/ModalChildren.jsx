import React, { useState } from "react";
import Modal from "./Modal";
import WeatherForecast from "./WeatherForecast";

const ModalChildren = ({ children, weather }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(!showModal);
  };

  const actionBar = (
    <div>
      <button
        onClick={handleClose}
        className=" bg-gradient-to-r from-orange-300 to-orange-400 w-full px-2 rounded text-white"
      >
        Exit
      </button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <WeatherForecast weather={weather} />
    </Modal>
  );

  return (
    <div>
      <button onClick={handleClick}>{children}</button>
      {showModal && modal}
    </div>
  );
};

export default ModalChildren;
