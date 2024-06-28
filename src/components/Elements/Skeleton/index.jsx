import { Input } from '@/components/Form';

export const SkeletonInput = () => {
  return (
    <div className="w-full">
      <Input className="animate-pulse" />
    </div>
  );
};
