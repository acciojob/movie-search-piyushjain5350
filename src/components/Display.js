import React from "react";

const Display = ({ data }) => {
    console.log(data);
  return (
    <div>
      {data &&
        data.map((item) => {
            <img src={item.Poster} alt="img" />
        })}
    </div>
  );
};

export default Display;
