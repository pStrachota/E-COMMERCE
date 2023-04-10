'use client';

import Button from '@/components/common/Button';
import { ArrowLeftIcon } from '@/components/common/Icons';
import { useRouter } from 'next/navigation';

export default function GoBackButton() {
  const router = useRouter();

  return (
    <Button
      aria-label="Go Back"
      circle
      variant="transparent"
      icon={<ArrowLeftIcon />}
      onClick={router.back}
    />
  );
}
