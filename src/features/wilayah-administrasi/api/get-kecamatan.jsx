import { env } from '@/config/env';
import { wilayahAPI } from '@/lib/api-client';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const fetchKecamatan = async (kabupatenId) => {
  const res = await wilayahAPI.get(`/kecamatan`, {
    params: {
      api_key: env.WILAYAH_KEY,
      id_kabupaten: kabupatenId,
    },
  });

  if (res.status !== 200) throw new Error(res.data.message);
  // console.log(data);
  return res.data;
};

export const getKecamatanQueries = (kabupatenId) => {
  return queryOptions({
    queryKey: ['kecamatan'],
    queryFn: async () => {
      const data = await fetchKecamatan(kabupatenId);
      return data;
    },
  });
};

export const useKecamatan = (kabupatenId) => {
  return useQuery({
    ...getKecamatanQueries(kabupatenId),
  });
};
