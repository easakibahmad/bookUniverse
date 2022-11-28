import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const MyBooks = () => {
  const [classicData, setClassicData] = useState([]);
  const [fantasyData, setFantasyData] = useState([]);
  const [horrorData, setHorrorData] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:4000/classicsSpecific?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setClassicData(data);
      });
  }, [user?.email]);

  useEffect(() => {
    fetch(`http://localhost:4000/fantasySpecific?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setFantasyData(data);
      });
  }, [user?.email]);

  useEffect(() => {
    fetch(`http://localhost:4000/horrorSpecific?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setHorrorData(data);
      });
  }, [user?.email]);
  return (
    <div>
      <div className="my-8">
        <h1 className="text-3xl pt-12 pb-4 text-center  font-bold">
          Classic Books
        </h1>
        <div className="overflow-x-auto md:px-8">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Condition</th>
                <th>Re-sell Price</th>
                <th>Posted time</th>
              </tr>
            </thead>
            <tbody>
              {classicData.map((item) => (
                <tr key={item._id}>
                  <td>{item.condition}</td>
                  <td>{item.resellPrice}</td>
                  <td>{item.postedTime.slice(0, 10)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyBooks;
