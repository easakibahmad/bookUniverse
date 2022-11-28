import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

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

  const handleDeleteClassic = (id) => {
    const proceedToDelete = window.confirm("Are you sure to delete?");
    if (proceedToDelete) {
      fetch(`http://localhost:4000/classics/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.deletedCount > 0) {
            toast.success("One Book deleted successfully!!");
            const remaining = classicData.filter((bk) => bk._id !== id);
            setClassicData(remaining);
          }
        });
    }
  };

  const handleDeleteFantasy = (id) => {
    const proceedToDelete = window.confirm("Are you sure to delete?");
    if (proceedToDelete) {
      fetch(`http://localhost:4000/fantasy/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.deletedCount > 0) {
            toast.success("One Book deleted successfully!!");
            const remaining = fantasyData.filter((bk) => bk._id !== id);
            setFantasyData(remaining);
          }
        });
    }
  };

  const handleDeleteHorror = (id) => {
    const proceedToDelete = window.confirm("Are you sure to delete?");
    if (proceedToDelete) {
      fetch(`http://localhost:4000/horror/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.deletedCount > 0) {
            toast.success("One Book deleted successfully!!");
            const remaining = horrorData.filter((bk) => bk._id !== id);
            setHorrorData(remaining);
          }
        });
    }
  };

  const handleUpdateClassic = (id) => {
    const advertise = "advertise";
    const proceedToAdvertise = window.confirm("Are you sure to advertise?");
    if (proceedToAdvertise) {
      fetch(`http://localhost:4000/classics/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ add: advertise }),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.acknowledged) {
            toast.success("Advertised successfully!!");
            const remaining = classicData.filter((bk) => bk._id !== id);
            // console.log(remaining);
            const newReview = classicData.find((bk) => bk._id === id);
            // console.log(newReview);
            const newlyUpdates = [newReview, ...remaining];
            setClassicData(newlyUpdates);
            // console.log(newlyUpdates);
          }
        });
    }
  };

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
                <th>Re-sell Price</th>
                <th>Posted time</th>
                <th>Status</th>
                <th>Advertise Now</th>
                <th>Delete now</th>
              </tr>
            </thead>
            <tbody>
              {classicData.map((item) => (
                <tr key={item._id}>
                  <td>{item.resellPrice}</td>
                  <td>{item.postedTime.slice(0, 10)}</td>
                  <td>
                    <button className="btn btn-sm">Available</button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleUpdateClassic(item._id)}
                      className="btn btn-sm "
                    >
                      Advertise
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteClassic(item._id)}
                      className="btn btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="my-8">
        <h1 className="text-3xl pt-12 pb-4 text-center  font-bold">
          Fantasy Books
        </h1>
        <div className="overflow-x-auto md:px-8">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Re-sell Price</th>
                <th>Posted time</th>
                <th>Status</th>
                <th>Advertise Now</th>
                <th>Delete now</th>
              </tr>
            </thead>
            <tbody>
              {fantasyData.map((item) => (
                <tr key={item._id}>
                  <td>{item.resellPrice}</td>
                  <td>{item.postedTime.slice(0, 10)}</td>
                  <td>
                    <button className="btn btn-sm">Available</button>
                  </td>
                  <td>
                    <button className="btn btn-sm">Advertise</button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteFantasy(item._id)}
                      className="btn btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="my-8">
        <h1 className="text-3xl pt-12 pb-4 text-center  font-bold">
          Horror Books
        </h1>
        <div className="overflow-x-auto md:px-8">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Re-sell Price</th>
                <th>Posted time</th>
                <th>Status</th>
                <th>Advertise Now</th>
                <th>Delete now</th>
              </tr>
            </thead>
            <tbody>
              {horrorData.map((item) => (
                <tr key={item._id}>
                  <td>{item.resellPrice}</td>
                  <td>{item.postedTime.slice(0, 10)}</td>
                  <td>
                    <button className="btn btn-sm">Available</button>
                  </td>
                  <td>
                    <button className="btn btn-sm">Advertise</button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteHorror(item._id)}
                      className="btn btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 2000,
        }}
      />
    </div>
  );
};

export default MyBooks;
