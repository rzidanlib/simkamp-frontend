import * as z from 'zod';

const usersSchema = z
  .object({
    username: z.string().min(1, { message: 'Username harus di isi' }),
    email: z.string().email({ message: 'Email tidak valid' }),
    password: z.string().min(8, { message: 'Password minimal 8 karakter' }),
    confirmPassword: z.string().min(8, { message: 'Password minimal 8 karakter' }),
    no_hp: z
      .string()
      .min(1, { message: 'No HP harus di isi' })
      .max(14, { message: 'No HP maksimal 14 angka' })
      .refine((val) => /^[0-9]+$/.test(val), { message: 'No HP hanya boleh berisi angka' }),
    partai: z.string().min(1, { message: 'Partai harus di pilih' }),
    nama_user: z.string().min(1, { message: 'Nama User harus di isi' }),
    role: z.string().min(1, { message: 'Role harus di pilih' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Password dan konfirmasi password harus sama',
    path: ['confirmPassword'],
  });

const rolesSchema = z.object({
  role_name: z.string().min(1, { message: 'Role harus di isi' }),
  description: z.string().min(1, { message: 'Deskripsi harus di isi' }),
});

export { usersSchema, rolesSchema };
