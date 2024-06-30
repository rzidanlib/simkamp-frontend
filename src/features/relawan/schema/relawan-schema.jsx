import * as z from 'zod';

const relawanSchema = z
  .object({
    relawan_nama: z.string().min(1, { message: 'Nama Relawan harus di isi' }),
    relawan_email: z.string().email({ message: 'Email tidak valid' }),
    relawan_password: z.string().min(8, { message: 'Password minimal 8 karakter' }),
    konfirmasi_password: z.string().min(8, { message: 'Konfirmasi Password minimal 8 karakter' }),
    relawan_no_telp: z
      .string()
      .min(1, { message: 'No HP harus di isi' })
      .max(14, { message: 'No HP maksimal 14 angka' })
      .refine((val) => /^[0-9]+$/.test(val), { message: 'No HP hanya boleh berisi angka' }),
    relawan_usia: z.string().min(1, { message: 'Usia harus di isi' }),
    relawan_jenis_kelamin: z.string().min(1, { message: 'Jenis Kelamin harus di isi' }),
    relawan_foto: z.any().refine((file) => file?.length !== 0, 'Foto Relawan harus di sertakan'),
    relawan_provinsi_kode: z.number().min(1, { message: 'Kode Provinsi harus di isi' }),
    relawan_kab_kota_kode: z.string().min(1, { message: 'Kode Kab/Kota harus di isi' }),
    relawan_status: z.string().min(1, { message: 'Status harus di isi' }),
    relawan_role_id: z.literal(5),
  })
  .refine((data) => data.relawan_password === data.konfirmasi_password, {
    message: 'Password dan konfirmasi password harus sama',
    path: ['konfirmasi_password'],
  });

const relawanUpdateSchema = z
  .object({
    relawan_nama: z.string().min(1, { message: 'Nama Relawan harus di isi' }),
    relawan_email: z.string().email({ message: 'Email tidak valid' }),
    relawan_password: z.string().optional(),
    konfirmasi_password: z.string().optional(),
    relawan_no_telp: z
      .string()
      .min(1, { message: 'No HP harus di isi' })
      .max(14, { message: 'No HP maksimal 14 angka' })
      .refine((val) => /^[0-9]+$/.test(val), { message: 'No HP hanya boleh berisi angka' }),
    relawan_usia: z.string().min(1, { message: 'Usia harus di isi' }),
    relawan_jenis_kelamin: z.string().min(1, { message: 'Jenis Kelamin harus di isi' }),
    relawan_foto: z.any().refine((file) => file?.length !== 0, 'Foto Relawan harus di sertakan'),
    relawan_provinsi_kode: z.number().min(1, { message: 'Kode Provinsi harus di isi' }),
    relawan_kab_kota_kode: z.string().min(1, { message: 'Kode Kab/Kota harus di isi' }),
    relawan_status: z.string().min(1, { message: 'Status harus di isi' }),
    relawan_role_id: z.literal(5),
  })
  .refine((data) => data.relawan_password === data.konfirmasi_password, {
    message: 'Password dan konfirmasi password harus sama',
    path: ['konfirmasi_password'],
  });

export { relawanSchema, relawanUpdateSchema };
