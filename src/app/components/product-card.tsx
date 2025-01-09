import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ProductCardProps {
  name: string
  image: string
  description: string
}

export default function ProductCard({ name, image, description }: ProductCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative h-48 mb-4">
          <Image src={image} alt={name} fill style={{objectFit: "contain"}} />
        </div>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Learn More</Button>
      </CardFooter>
    </Card>
  )
}

