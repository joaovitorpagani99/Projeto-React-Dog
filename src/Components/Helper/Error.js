import React from "react";

const Error = (props) => {
  if (!props.error) return null;
  return (
    <div>
      <p style={{ color: "#f31", margin: "1rem 0" }}>{props.error}</p>
    </div>
  );
};

export default Error;
