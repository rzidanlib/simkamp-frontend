import * as z from 'zod';

const fileSchema = z.object({
  name: z.string(),
  size: z.number(),
  type: z.string(),
  lastModified: z.number(),
});

const createPartaiSchema = z.object({
  partai: z.string().min(1, { message: 'Partai harus di isi' }),
  partai_name: z.string().min(1, { message: 'Nama Partai harus di isi' }),
  logo_partai: fileSchema.nullable().refine((file) => file !== null, {
    message: 'Logo Partai harus diisi',
  }),
});

export { createPartaiSchema };
