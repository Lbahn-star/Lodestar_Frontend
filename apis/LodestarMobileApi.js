import * as React from 'react';
import {
  useQuery,
  useMutation,
  useIsFetching,
  useQueryClient,
} from 'react-query';
import useFetch from 'react-fetch-hook';
import { useIsFocused } from '@react-navigation/native';
import usePrevious from '../utils/usePrevious';
import * as GlobalVariables from '../config/GlobalVariableContext';

export const changePasswordPUT = (Constants, { new_password, old_password }) =>
  fetch(
    `https://lodestarfuturesmobile.onrender.com/api/users/change-password`,
    {
      body: JSON.stringify({
        old_password: old_password,
        new_password: new_password,
      }),
      headers: {
        Accept: 'application/json',
        Authorization: Constants['ACCESS_TOKEN'],
        'Content-Type': 'application/json',
      },
      method: 'PUT',
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useChangePasswordPUT = initialArgs => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();

  return useMutation(
    args => changePasswordPUT(Constants, { ...initialArgs, ...args }),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('password', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('password');
        queryClient.invalidateQueries('passwords');
      },
    }
  );
};

export const getMeGET = Constants =>
  fetch(`https://lodestarfuturesmobile.onrender.com/api/users/me`, {
    headers: {
      Accept: 'application/json',
      Authorization: Constants['ACCESS_TOKEN'],
      'Content-Type': 'application/json',
    },
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useGetMeGET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(['user', args], () => getMeGET(Constants, args), {
    refetchInterval,
    onSuccess: () => queryClient.invalidateQueries(['users']),
  });
};

export const FetchGetMeGET = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useGetMeGET(
    {},
    { refetchInterval }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchGetMe: refetch });
};

export const getMyPrivateRoomsGET = Constants =>
  fetch(
    `https://lodestarfuturesmobile.onrender.com/api/privaterooms/myrooms/`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['ACCESS_TOKEN'],
        'Content-Type': 'application/json',
      },
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useGetMyPrivateRoomsGET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['rooms', args],
    () => getMyPrivateRoomsGET(Constants, args),
    {
      refetchInterval,
    }
  );
};

export const FetchGetMyPrivateRoomsGET = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useGetMyPrivateRoomsGET(
    {},
    { refetchInterval }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchGetMyPrivateRooms: refetch });
};

export const getPublicUserGET = (Constants, { username }) =>
  fetch(
    `https://lodestarfuturesmobile.onrender.com/api/users/@${username ?? ''}`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useGetPublicUserGET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(['user', args], () => getPublicUserGET(Constants, args), {
    refetchInterval,
    onSuccess: () => queryClient.invalidateQueries(['users']),
  });
};

export const FetchGetPublicUserGET = ({
  children,
  onData = () => {},
  refetchInterval,
  username,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useGetPublicUserGET(
    { username },
    { refetchInterval }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchGetPublicUser: refetch });
};

export const getRoomInfoGET = (Constants, { room_pk }) =>
  fetch(
    `https://lodestarfuturesmobile.onrender.com/api/privaterooms/room/${
      room_pk ?? ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['ACCESS_TOKEN'],
        'Content-Type': 'application/json',
      },
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useGetRoomInfoGET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(['room', args], () => getRoomInfoGET(Constants, args), {
    refetchInterval,
    onSuccess: () => queryClient.invalidateQueries(['rooms']),
  });
};

export const FetchGetRoomInfoGET = ({
  children,
  onData = () => {},
  refetchInterval,
  room_pk,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useGetRoomInfoGET(
    { room_pk },
    { refetchInterval }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchGetRoomInfo: refetch });
};

export const loginPOST = (Constants, { password, username }) =>
  fetch(`https://lodestarfuturesmobile.onrender.com/api/users/login/`, {
    body: JSON.stringify({ username: username, password: password }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useLoginPOST = ({ password, username }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://lodestarfuturesmobile.onrender.com/api/users/login/`,
    {
      body: JSON.stringify({ username: username, password: password }),
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  );
};

export const FetchLoginPOST = ({
  children,
  onData = () => {},
  refetchInterval,
  password,
  username,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(`https://lodestarfuturesmobile.onrender.com/api/users/login/`, {
    body: JSON.stringify({ username: username, password: password }),
    depends: [isFocused],
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  });

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchLogin: refetch });
};

export const loginRefreshPOST = (Constants, { refresh }) =>
  fetch(`https://lodestarfuturesmobile.onrender.com/api/users/login/refresh/`, {
    body: JSON.stringify({ refresh: refresh }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useLoginRefreshPOST = ({ refresh }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://lodestarfuturesmobile.onrender.com/api/users/login/refresh/`,
    {
      body: JSON.stringify({ refresh: refresh }),
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  );
};

export const FetchLoginRefreshPOST = ({
  children,
  onData = () => {},
  refetchInterval,
  refresh,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `https://lodestarfuturesmobile.onrender.com/api/users/login/refresh/`,
    {
      body: JSON.stringify({ refresh: refresh }),
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchLoginRefresh: refetch });
};

export const logoutPOST = (Constants, { refresh }) =>
  fetch(`https://lodestarfuturesmobile.onrender.com/api/users/logout/`, {
    body: JSON.stringify({ refresh: refresh }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['ACCESS_TOKEN'],
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useLogoutPOST = ({ refresh }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://lodestarfuturesmobile.onrender.com/api/users/logout/`,
    {
      body: JSON.stringify({ refresh: refresh }),
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        Authorization: Constants['ACCESS_TOKEN'],
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  );
};

export const FetchLogoutPOST = ({
  children,
  onData = () => {},
  refetchInterval,
  refresh,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(`https://lodestarfuturesmobile.onrender.com/api/users/logout/`, {
    body: JSON.stringify({ refresh: refresh }),
    depends: [isFocused],
    headers: {
      Accept: 'application/json',
      Authorization: Constants['ACCESS_TOKEN'],
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchLogout: refetch });
};

export const putMePUT = (
  Constants,
  { birthday, company_name, country, education, job_title, name, nationality }
) =>
  fetch(`https://lodestarfuturesmobile.onrender.com/api/users/me`, {
    body: JSON.stringify({
      name: name,
      bithday: birthday,
      education: education,
      nationality: nationality,
      country: country,
      job_title: job_title,
      company_name: company_name,
    }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['ACCESS_TOKEN'],
      'Content-Type': 'application/json',
    },
    method: 'PUT',
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const usePutMePUT = initialArgs => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();

  return useMutation(args => putMePUT(Constants, { ...initialArgs, ...args }), {
    onError: (err, variables, { previousValue }) => {
      if (previousValue) {
        return queryClient.setQueryData('user', previousValue);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries('user');
      queryClient.invalidateQueries('users');
    },
  });
};

export const signupPOST = (Constants, { email, name, pw, username }) =>
  fetch(`https://lodestarfuturesmobile.onrender.com/api/users/`, {
    body: JSON.stringify({
      name: name,
      username: username,
      email: email,
      password: pw,
    }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useSignupPOST = ({ email, name, pw, username }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(`https://lodestarfuturesmobile.onrender.com/api/users/`, {
    body: JSON.stringify({
      name: name,
      username: username,
      email: email,
      password: pw,
    }),
    depends: [isFocused],
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  });
};

export const FetchSignupPOST = ({
  children,
  onData = () => {},
  refetchInterval,
  email,
  name,
  pw,
  username,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(`https://lodestarfuturesmobile.onrender.com/api/users/`, {
    body: JSON.stringify({
      name: name,
      username: username,
      email: email,
      password: pw,
    }),
    depends: [isFocused],
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  });

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchSignup: refetch });
};
