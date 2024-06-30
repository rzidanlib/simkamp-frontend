import * as z from 'zod';

const kandidatSchema = z
  .object({
    kandidat_nama: z.string().min(1, { message: 'Nama Kandidat harus di isi' }),
    kandidat_email: z.string().email({ message: 'Email tidak valid' }),
    kandidat_password: z.string().min(8, { message: 'Password minimal 8 karakter' }),
    konfirmasi_password: z.string().min(8, { message: 'Konfirmasi Password minimal 8 karakter' }),
    kandidat_no_telp: z
      .string()
      .min(1, { message: 'No HP harus di isi' })
      .max(14, { message: 'No HP maksimal 14 angka' })
      .refine((val) => /^[0-9]+$/.test(val), { message: 'No HP hanya boleh berisi angka' }),
    kandidat_agama_id: z.number({ message: 'Agama harus di pilih' }),
    kandidat_foto: z.any().refine((file) => file?.length !== 0, 'Foto kandidat harus di sertakan'),
    kandidat_usia: z.string().min(1, { message: 'Usia harus di isi' }),
    kandidat_alamat: z.string().min(1, { message: 'Alamat harus di isi' }),
    kandidat_dapil_id: z.number({ message: 'Dapil harus di pilih' }),
    kandidat_jenis_pemilihan_id: z.number({ message: 'Jenis Pemilihan harus di pilih' }),
    kandidat_posisi_calon_tetap_id: z.number({ message: 'Posisi Calon Tetap harus di pilih' }),
    kandidat_jenis_kelamin: z.string().min(1, { message: 'Jenis Kelamin harus di isi' }),
    kandidat_role_id: z.literal(4),
    kandidat_nomor_urut: z.string().min(1, { message: 'Nomor Urut harus di isi' }),
  })
  .refine((data) => data.kandidat_password === data.konfirmasi_password, {
    message: 'Password dan konfirmasi password harus sama',
    path: ['konfirmasi_password'],
  });

const kandidatUpdateSchema = z
  .object({
    kandidat_nama: z.string().min(1, { message: 'Nama Kandidat harus di isi' }),
    kandidat_email: z.string().email({ message: 'Email tidak valid' }),
    kandidat_password: z.string().optional(),
    konfirmasi_password: z.string().optional(),
    kandidat_no_telp: z
      .string()
      .min(1, { message: 'No HP harus di isi' })
      .max(14, { message: 'No HP maksimal 14 angka' })
      .refine((val) => /^[0-9]+$/.test(val), { message: 'No HP hanya boleh berisi angka' }),
    kandidat_agama_id: z.number({ message: 'Agama harus di pilih' }),
    kandidat_foto: z.any().refine((file) => file?.length !== 0, 'Foto kandidat harus di sertakan'),
    kandidat_usia: z.string().min(1, { message: 'Usia harus di isi' }),
    kandidat_alamat: z.string().min(1, { message: 'Alamat harus di isi' }),
    kandidat_dapil_id: z.number({ message: 'Dapil harus di pilih' }),
    kandidat_jenis_pemilihan_id: z.number({ message: 'Jenis Pemilihan harus di pilih' }),
    kandidat_posisi_calon_tetap_id: z.number({ message: 'Posisi Calon Tetap harus di pilih' }),
    kandidat_jenis_kelamin: z.string().min(1, { message: 'Jenis Kelamin harus di isi' }),
    kandidat_role_id: z.literal(4),
    kandidat_nomor_urut: z.string().min(1, { message: 'Nomor Urut harus di isi' }),
  })
  .refine((data) => data.kandidat_password === data.konfirmasi_password, {
    message: 'Password dan konfirmasi password harus sama',
    path: ['konfirmasi_password'],
  });

export { kandidatSchema, kandidatUpdateSchema };
