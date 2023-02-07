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

export const getAvatarsGET = Constants =>
  fetch(`http://backend.lodestarfutures.com/api/v1/avatars`, {
    headers: {
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
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

export const useGetAvatarsGET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(['Avatars', args], () => getAvatarsGET(Constants, args), {
    refetchInterval,
  });
};

export const FetchGetAvatarsGET = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useGetAvatarsGET(
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

  return children({ loading, data, error, refetchGetAvatars: refetch });
};

export const getSpecificAvatarGET = (Constants, { pk }) =>
  fetch(`http://backend.lodestarfutures.com/api/v1/avatars/${pk ?? ''}`, {
    headers: {
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'X-CSRFToken': Constants['CF_TOKEN'],
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

export const useGetSpecificAvatarGET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['Avatar', args],
    () => getSpecificAvatarGET(Constants, args),
    {
      refetchInterval,
      onSuccess: () => queryClient.invalidateQueries(['Avatars']),
    }
  );
};

export const FetchGetSpecificAvatarGET = ({
  children,
  onData = () => {},
  refetchInterval,
  pk,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useGetSpecificAvatarGET(
    { pk },
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

  return children({ loading, data, error, refetchGetSpecificAvatar: refetch });
};
