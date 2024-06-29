import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

import { env } from '@/config/env';

const wilayahURL = `${env.API_WILAYAH_URL}`;
const wilayahKey = `${env.WILAYAH_KEY}`;

export const fetchProvinsi = async () => {
  try {
    const response = await axios.get(`${wilayahURL}/provinsi?api_key=${wilayahKey}`);
    return response.data.value;
  } catch (error) {
    throw new Error(error);
  }
};
export const fetchKabKota = async (provinsiId) => {
  try {
    const response = await axios.get(
      `${wilayahURL}/kabupaten?api_key=${wilayahKey}&id_provinsi=${provinsiId}`
    );
    return response.data.value;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchKecamatan = async (kabKotaId) => {
  try {
    const response = await axios.get(
      `${wilayahURL}/kecamatan?api_key=${wilayahKey}&id_kabupaten=${kabKotaId}`
    );
    return response.data.value;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchKelurahan = async (kecamatanId) => {
  try {
    const response = await axios.get(
      `${wilayahURL}/kelurahan?api_key=${wilayahKey}&id_kecamatan=${kecamatanId}`
    );
    return response.data.value;
  } catch (error) {
    throw new Error(error);
  }
};

export const useProvinsi = () => {
  return useQuery({
    queryKey: ['provinsi'],
    queryFn: fetchProvinsi,
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useKabKota = (provinsiId) => {
  return useQuery({
    queryKey: ['kabKota', provinsiId],
    queryFn: () => fetchKabKota(provinsiId),
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useKecamatan = (kabKotaId) => {
  return useQuery({
    queryKey: ['kecamatan', kabKotaId],
    queryFn: () => fetchKecamatan(kabKotaId),
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useKelurahan = (kecamatanId) => {
  return useQuery({
    queryKey: ['kelurahan', kecamatanId],
    queryFn: () => fetchKelurahan(kecamatanId),
    onError: (error) => {
      console.error(error);
    },
  });
};
