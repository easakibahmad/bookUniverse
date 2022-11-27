import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookModal from "../../components/bookModal/BookModal";
import SingleBook from "../../components/singleBook/SingleBook";

const Fantasy = () => {
  const dataHorror = useLoaderData();
  const [booksDetail, setBooksDetail] = useState(null);

  return (
    <section className="py-12">
      <h1 className="md:text-3xl sm:text-2xl text-xl font-bold text-center">
        Fantasy books are available here
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 sm:p-12 lg:p-16 lg:grid-cols-3">
        {dataHorror.map((item) => (
          <SingleBook
            key={item._id}
            setBooksDetail={setBooksDetail}
            item={item}
          >
            item
          </SingleBook>
        ))}
      </div>
      {booksDetail && (
        <BookModal
          setBooksDetail={setBooksDetail}
          booksDetail={booksDetail}
        ></BookModal>
      )}
    </section>
  );
};

export default Fantasy;
