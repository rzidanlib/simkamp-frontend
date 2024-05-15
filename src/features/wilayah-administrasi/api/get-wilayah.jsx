import { env } from '@/config/env';
import { wilayahAPI } from '@/lib/api-client';

export const getProvinsi = async () => {
  const response = await wilayahAPI.get(`/provinsi?api_key=${env.WILAYAH_KEY}`);
  return response.data;
};

export const getProvinsiById = async (id) => {
  const response = await wilayahAPI.get(`/provinsi?api_key=${env.WILAYAH_KEY}&id=${id}`);
  const provinsi = response.data.value.find((provinsi) => provinsi.id === id);
  return provinsi ? { id: provinsi.id, name: provinsi.name } : null;
};

export const getKabupaten = async (provinsiId) => {
  const response = await wilayahAPI.get(`/kabupaten`, {
    params: {
      api_key: env.WILAYAH_KEY,
      id_provinsi: provinsiId,
    },
  });
  return response.data;
};

export const getKecamatan = async (kabupatenId) => {
  const response = await wilayahAPI.get(`/kecamatan`, {
    params: {
      api_key: env.WILAYAH_KEY,
      id_kabupaten: kabupatenId,
    },
  });
  return response.data;
};
