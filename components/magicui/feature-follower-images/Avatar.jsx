import React from 'react';
import Image from 'next/image';

import AvatarImg from '@/public/feature-section-images/Avatar.png';
import AvatarOneImg from '@/public/feature-section-images/AvatarOne.png';

// Export React components, not just the image imports
export const Avatar = () => <Image src={AvatarImg} alt="Avatar" />;
export const AvatarOne = () => <Image src={AvatarOneImg} alt="Avatar One" />;

// Also export the raw images if needed elsewhere
export { AvatarImg, AvatarOneImg };

// Default export component that shows both
export default function AvatarComponent() {
  return (
    <div>
      <Avatar />
      <AvatarOne />
    </div>
  );
}
