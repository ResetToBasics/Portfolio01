import Image from 'next/image';
import logo from '@/shared/assets/images/logo.svg';
import { Button } from '@/shared/components/ui/button/Button';
import { ChevronDown } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-5 max-w-7xl w-full mx-auto">
      <div className="flex items-center gap-2 cursor-pointer">
        <Image src={logo} alt="Monotree Logo" width={133} height={40} className="h-7 w-auto" priority />
      </div>

      <ul className="hidden md:flex items-center gap-8 text-[15px] font-medium text-gray-700">
        <li className="flex items-center gap-1 cursor-pointer hover:text-black">
          Accounts 
          <ChevronDown className="w-4 h-4" />
        </li>
        <li className="cursor-pointer hover:text-black">Cards</li>
        <li className="cursor-pointer hover:text-black">Wealth</li>
        <li className="cursor-pointer hover:text-black">Security</li>
        <li className="cursor-pointer hover:text-black">Support</li>
      </ul>

      <div className="hidden md:flex items-center gap-6">
        <Button variant="secondary" size="sm" className="px-4 py-2.5 rounded-[10px]">
          Book a demo
        </Button>
        <div className="flex items-center gap-1 cursor-pointer text-sm font-medium border-l border-gray-200 pl-6">


          English
          <ChevronDown className="w-4 h-4 text-gray-500" />
        </div>
      </div>
    </nav>
  );
};
