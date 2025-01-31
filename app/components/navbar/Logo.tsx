'use client';

import { useRouter } from 'next/navigation';

import Image from 'next/image';

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      alt="logo"
      onClick={() => router.push('/')}
      className="hidden md:block cursor-pointer"
      height={100}
      width={100}
      src="/images/logo.svg"
    ></Image>
  );
};

export default Logo;
