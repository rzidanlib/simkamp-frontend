import * as z from 'zod';

const rolesSchema = z.object({
  role: z.string().min(1, { message: 'Role harus di isi' }),
  role_deskripsi: z.string().min(1, { message: 'Deskripsi Role harus di isi' }),
});

const jenisPemilihanSchema = z.object({
  jenis_pemilihan: z.string().min(1, { message: 'Jenis pemilihan harus di isi' }),
});

const agamaSchema = z.object({
  agama: z.string().min(1, { message: 'Jenis pemilihan harus di isi' }),
});

const posisiCalonSchema = z.object({
  posisi_calon_tetap: z.string().min(1, { message: 'Jenis pemilihan harus di isi' }),
});

const dapilSchema = z.object({
  dapil_nama: z.string().min(1, { message: 'Jenis pemilihan harus di isi' }),
  dapil_provinsi: z.number().min(1, { message: 'Jenis pemilihan harus di isi' }),
});

const partaiSchema = z.object({
  partai_label: z.string().min(1, { message: 'Partai harus di isi' }),
  partai_nama: z.string().min(1, { message: 'Nama Partai harus di isi' }),
  partai_nomor: z
    .string()
    .min(1, { message: 'Nomor partai harus di isi' })
    .refine((val) => /^[0-9]+$/.test(val), { message: 'Nomor partai hanya boleh berisi angka' }),
  partai_logo: z.any().refine((file) => file?.length !== 0, 'Logo harus di sertakan'),
});

export {
  rolesSchema,
  partaiSchema,
  jenisPemilihanSchema,
  posisiCalonSchema,
  dapilSchema,
  agamaSchema,
};
