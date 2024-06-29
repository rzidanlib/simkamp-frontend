import * as z from 'zod';

const quickCountSchema = z.object({
  quick_count_provinsi: z.number().min(1, { message: 'Provinsi harus diisi' }),
  quick_count_kab_kota: z.string().min(1, { message: 'Kabupaten/Kota harus diisi' }),
  quick_count_kecamatan: z.string().min(1, { message: 'Kecamatan harus diisi' }),
  quick_count_kelurahan: z.string().min(1, { message: 'Kelurahan harus diisi' }),
  quick_count_jumlah_suara: z
    .string()
    .min(1, { message: 'Jumlah suara harus diisi' })
    .refine((val) => !isNaN(parseFloat(val)) && isFinite(val) && parseInt(val, 10) > 0, {
      message: 'Jumlah suara harus berupa angka dan lebih dari 0',
    }),
  quick_count_foto: z
    .any()
    .optional()
    .refine((file) => file?.length !== 0, { message: 'Foto harus disertakan' }),
  quick_count_tps: z.string().min(1, { message: 'TPS harus diisi' }),
});

export { quickCountSchema };
