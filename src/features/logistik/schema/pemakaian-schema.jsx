import * as z from 'zod';

const logistikSchema = z.object({
  logistik_nama_atribut: z.string().min(1, { message: 'Nama atribut harus diisi' }),
  logistik_satuan_unit: z.string().min(1, { message: 'Satuan unit harus diisi' }),
  logistik_stok: z
    .string()
    .min(1, { message: 'Stok harus diisi' })
    .refine((val) => !isNaN(parseFloat(val)) && isFinite(val) && parseInt(val, 10) >= 0, {
      message: 'Stok harus berupa angka dan tidak negatif',
    }),
  logistik_total_harga: z
    .string()
    .min(1, { message: 'Total harga harus diisi' })
    .refine((val) => !isNaN(parseFloat(val)) && isFinite(val) && parseFloat(val) >= 0, {
      message: 'Total harga harus berupa angka dan tidak negatif',
    }),
});

const pemakaianSchema = z.object({
  pemakaian_tanggal: z.string().min(1, { message: 'Tanggal pemakaian harus diisi' }),
  pemakaian_jumlah: z
    .string()
    .min(1, { message: 'Jumlah pemakaian harus diisi' })
    .refine((val) => !isNaN(parseFloat(val)) && isFinite(val) && parseInt(val, 10) > 0, {
      message: 'Jumlah pemakaian harus berupa angka dan lebih dari 0',
    }),
  pemakaian_logistik_id: z.number().min(1, { message: 'ID Logistik harus diisi' }),
});

export { logistikSchema, pemakaianSchema };
