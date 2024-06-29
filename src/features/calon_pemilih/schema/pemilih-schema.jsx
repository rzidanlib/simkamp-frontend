import * as z from 'zod';

const calonPemilihSchema = z.object({
  calon_pemilih_nama: z.string().min(1, { message: 'Nama Calon Pemilih harus di isi' }),
  calon_pemilih_no_telp: z
    .string()
    .min(1, { message: 'No HP harus di isi' })
    .max(14, { message: 'No HP maksimal 14 angka' })
    .refine((val) => /^[0-9]+$/.test(val), { message: 'No HP hanya boleh berisi angka' }),
  calon_pemilih_foto: z
    .any()
    .optional()
    .refine((file) => file?.length !== 0, 'Foto Calon Pemilih harus di sertakan'),
  calon_pemilih_foto_ktp: z
    .any()
    .optional()
    .refine((file) => file?.length !== 0, 'Foto KTP harus di sertakan'),
  calon_pemilih_provinsi: z.number().min(1, { message: 'Provinsi harus di isi' }),
  calon_pemilih_kab_kota: z.string().min(1, { message: 'Kabupaten/Kota harus di isi' }),
  calon_pemilih_kecamatan: z.string().min(1, { message: 'Kecamatan harus di isi' }),
  calon_pemilih_kelurahan: z.string().min(1, { message: 'Kelurahan harus di isi' }),
  calon_pemilih_status: z.string().min(1, { message: 'Status harus di isi' }),
});

export { calonPemilihSchema };
