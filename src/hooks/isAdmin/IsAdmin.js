import { useEffect, useState } from "react";
const useAdmin = (email) => {
  const [isAdminMail, setIsAdminMail] = useState(false);
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:4000/admin/${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsAdminMail(data.isAdminMail);
        });
    }
  }, [email]);
  return [isAdminMail];
};

export default useAdmin;
