import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthProvider";
const useSeller = (email) => {
  const { isSellerMail, setIsSellerMail } = useContext(AuthContext);
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:4000/sellers/${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsSellerMail(data.isSellerMail);
        });
    }
  }, [email, setIsSellerMail]);
  return [isSellerMail];
};

export default useSeller;
