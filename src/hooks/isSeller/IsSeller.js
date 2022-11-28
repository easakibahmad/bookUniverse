import { useEffect, useState } from "react";
const useSeller = (email) => {
  const [isSellerMail, setIsSellerMail] = useState(false);
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:4000/sellers/${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsSellerMail(data.isSellerMail);
        });
    }
  }, [email]);
  return [isSellerMail];
};

export default useSeller;
