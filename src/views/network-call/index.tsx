"use client";

import { useCallback, useEffect, useState } from "react";
import axios from "axios";

const NetworkCallView = () => {
  const [accounts, setAccounts] = useState([]);

  const fetchAccounts = useCallback(async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_APPLICATION_ID}/${process.env.NEXT_PUBLIC_REST_API_KEY}/data/Accounts`
      );

      setAccounts(res.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchAccounts();
  }, [fetchAccounts]);

  return (
    <div>
      {accounts.map((account) => (
        <>
          <h1>{account?.name}</h1>
          <h2>{account?.email}</h2>
        </>
      ))}
    </div>
  );
};

export default NetworkCallView;
