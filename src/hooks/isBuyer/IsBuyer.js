import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthProvider";
const useBuyer = (email) => {
  const { isBuyerMail, setIsBuyerMail } = useContext(AuthContext);
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:4000/buyers/${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsBuyerMail(data.isBuyerMail);
        });
    }
  }, [email, setIsBuyerMail]);
  return [isBuyerMail];
};

export default useBuyer;
