import useSwr from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useFetch = (url: string) => {
  const { data, isValidating, error } = useSwr(url, fetcher, {
    refreshInterval: 5000,
  });

  return {
    data: data?.data,
    loading: isValidating,
    error,
  };
};
