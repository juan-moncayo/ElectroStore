import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react"

const products = [
  { id: 1, name: "Smartphone X", price: 699.99, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80" },
  { id: 2, name: "Laptop Pro", price: 1299.99, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80" },
  { id: 3, name: "Auriculares Inalámbricos", price: 149.99, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80" },
  { id: 4, name: "Smartwatch Elite", price: 249.99, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80" },
]

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">ElectroStore</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <li key={product.id}>
            <Card className="h-full">
              <CardBody className="p-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
              </CardBody>
              <CardFooter>
                <Button color="primary" fullWidth>
                  Añadir al carrito
                </Button>
              </CardFooter>
            </Card>
          </li>
        ))}
      </ul>
    </main>
  )
}