// import { env } from '@/config/env';
// import { wilayahAPI } from '@/lib/api-client';
// import { queryOptions, useQuery } from '@tanstack/react-query';

// export const fetchProvinsi = async () => {
//   const res = await wilayahAPI.get(`/provinsi?api_key=${env.WILAYAH_KEY}`);

//   if (res.status !== 200) throw new Error(res.data.message);
//   // console.log(data);
//   return res.data;
// };

// export const getProvinsiQueries = () => {
//   return queryOptions({
//     queryKey: ['provinsi'],
//     queryFn: async () => {
//       const data = await fetchProvinsi();
//       return data;
//     },
//   });
// };

// export const useProvinsi = () => {
//   return useQuery({
//     ...getProvinsiQueries(),
//   });
// };
