import * as z from 'zod';

const arusKasSchema = z.object({
  aruskas_kategori: z.string().min(1, { message: 'Kategori harus diisi' }),
  aruskas_foto_kuitansi: z
    .any()
    .optional()
    .refine((file) => file?.length !== 0, { message: 'Foto kuitansi harus disertakan' }),
  aruskas_detail: z.string().min(1, { message: 'Detail harus diisi' }),
  aruskas_catatan: z.string().optional(),
  aruskas_jumlah: z
    .string()
    .min(1, { message: 'Jumlah harus diisi' })
    .refine((val) => !isNaN(parseFloat(val)) && isFinite(val), {
      message: 'Jumlah harus berupa angka',
    }),
  aruskas_tanggal: z.string().min(1, { message: 'Tanggal harus diisi' }),
});

export { arusKasSchema };
