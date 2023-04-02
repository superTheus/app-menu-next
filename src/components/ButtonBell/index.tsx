import Beel from '@/assets/images/beel.svg'
import Image from 'next/image';

export default function ButtonBell() {
  return (
    <div className="div-btn-bell">
      <Image src={Beel} alt='Beel' />
    </div>
  );
}