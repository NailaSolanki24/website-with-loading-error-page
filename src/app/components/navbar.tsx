import Link from "next/link";

export default function Navbar() {
  return (
    <nav className='bg-blue-400 text-black text-2xl h-auto sm:h-12 md:h-16 lg:h-16 py-3 px-3 flex flex-col sm:flex-row justify-between items-center'>
      <div>
        <h1 className='text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold italic '>Website</h1>
       </div>

        <div className='w-full sm:w-auto mb-4 sm:mb-0'>
      <ul className='flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-5'>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/shop">Shop</Link></li>
        <li><Link href="/about">About Us</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/candles">Candles</Link></li>
        <li><Link href="/error">Feedback</Link></li>
      </ul>
      </div>
    
    </nav>
  );
}