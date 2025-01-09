import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <Image src="/coca-cola-logo.png" alt="Coca-Cola Logo" width={150} height={50} />
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="#" className="text-gray-600 hover:text-red-600">Products</Link></li>
            <li><Link href="#" className="text-gray-600 hover:text-red-600">About</Link></li>
            <li><Link href="#" className="text-gray-600 hover:text-red-600">Contact</Link></li>
          </ul>
        </nav>
        <Button>Sign Up</Button>
      </div>
    </header>
  )
}

