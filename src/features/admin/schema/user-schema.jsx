import * as z from 'zod';

const usersSchema = z
  .object({
    user_nama: z.string().min(1, { message: 'Nama User harus di isi' }),
    user_email: z.string().email({ message: 'Email tidak valid' }),
    user_password: z.string().min(8, { message: 'Password minimal 8 karakter' }),
    confirmPassword: z.string().min(8, { message: 'Password minimal 8 karakter' }),
    user_no_telp: z
      .string()
      .min(1, { message: 'No HP harus di isi' })
      .max(14, { message: 'No HP maksimal 14 angka' })
      .refine((val) => /^[0-9]+$/.test(val), { message: 'No HP hanya boleh berisi angka' }),
    user_partai_id: z.number({ message: 'Partai harus di pilih' }),
    user_role_id: z.number({ message: 'Role harus di pilih' }),
  })
  .refine((data) => data.user_password === data.confirmPassword, {
    message: 'Password dan konfirmasi password harus sama',
    path: ['confirmPassword'],
  });

export { usersSchema };
