import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().min(1, { message: 'Email harus diisi.' }),
  password: z.string().min(1, { message: 'Password harus diisi.' }),
  role: z.enum(['admin-partai', 'administrator', 'kandidat', 'relawan'], {
    message: 'Role harus dipilih.',
  }),
});

export { loginSchema };
