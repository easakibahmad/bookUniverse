import React from "react";
import ClassicAdd from "../classicAdd/ClassicAdd";

const Advertise = ({ classicAdd, horrorAdd, fantasyAdd }) => {
  //   console.log(classicAdd);
  const totalLength = classicAdd.length + horrorAdd.length + fantasyAdd.length;
  return (
    <>
      {totalLength >= 1 && (
        <div className="md:px-16">
          <h1 className="text-3xl pt-12 pb-4 underline font-bold">
            Advertised Items
          </h1>
          <div className="grid grid-cols-1  gap-8">
            <div className="grid grid-cols-1 gap-6">
              {classicAdd.map((item) => (
                <ClassicAdd key={item._id} item={item}></ClassicAdd>
              ))}
            </div>
            <div className="grid grid-cols-1 gap-6">
              {fantasyAdd.map((item) => (
                <ClassicAdd key={item._Id} item={item}></ClassicAdd>
              ))}
            </div>
            <div className="grid grid-cols-1 gap-6">
              {horrorAdd.map((item) => (
                <ClassicAdd key={item._Id} item={item}></ClassicAdd>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Advertise;
