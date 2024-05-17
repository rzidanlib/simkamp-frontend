import { env } from '@/config/env';
import { wilayahAPI } from '@/lib/api-client';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const fetchKabupaten = async (provinsiId) => {
  const res = await wilayahAPI.get(`/kabupaten`, {
    params: {
      api_key: env.WILAYAH_KEY,
      id_provinsi: provinsiId,
    },
  });

  if (res.status !== 200) throw new Error(res.data.message);
  // console.log(data);
  return res.data;
};

export const getKabupatenQueries = (provinsiId) => {
  return queryOptions({
    queryKey: ['Kkabupaten'],
    queryFn: async () => {
      const data = await fetchKabupaten(provinsiId);
      return data;
    },
  });
};

export const useKabupaten = (provinsiId) => {
  return useQuery({
    ...getKabupatenQueries(provinsiId),
  });
};
