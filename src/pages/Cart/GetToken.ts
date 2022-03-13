import { useEffect, useState } from 'react';
import { useUser } from 'state/auth';

const GetToken = () => {
  const [token1, setToken] = useState('' as any);
  const user = useUser();

  useEffect(() => {
    setToken(user?.access_token);
  }, [user?.access_token]);

  return { token1 };
};

export default GetToken;
