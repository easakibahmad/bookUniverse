import { useEffect, useState } from "react";
const useBuyer = (email) => {
  const [isBuyerMail, setIsBuyerMail] = useState(false);
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:4000/buyers/${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsBuyerMail(data.isBuyerMail);
        });
    }
  }, [email]);
  return [isBuyerMail];
};

export default useBuyer;
