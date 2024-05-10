import { useState } from "react";

const Lamp = () => {
  const [status, setStatus] = useState(false);
  const handleClick = () => {
    setStatus(!status);
  };

  return (
    <>
      <button onClick={handleClick}>{status ? "tắt đi" : "bật lên"}</button>
      <div>{status ? "đèn đang bật" : "đèn đang tắt"}</div>
    </>
  );
};

export default Lamp;
