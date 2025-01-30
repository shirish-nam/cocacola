import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Header from './components/header'
import ProductCard from './components/product-card'
import ContactForm from './components/contact-form'
import Script from 'next/script'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <Image
            src="/coca-cola-hero.jpg"
            alt="Coca-Cola bottle"
            fill
            style={{objectFit: "cover"}}
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="relative z-10 text-center text-white">
            <h1 className="text-6xl font-bold mb-4">Refresh the World</h1>
            <p className="text-xl mb-8">Enjoy Coca-Cola&apos;s iconic taste</p>
            <Button size="lg">Explore Our Products</Button>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Our Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProductCard 
                name="Coca-Cola Classic" 
                image="/coca-cola-classic.jpg" 
                description="The original and unmistakable taste of Coca-Cola."
              />
              <ProductCard 
                name="Coca-Cola Zero Sugar" 
                image="/coca-cola-zero.jpg" 
                description="Great Coca-Cola taste with zero sugar and zero calories."
              />
              <ProductCard 
                name="Diet Coke" 
                image="/diet-coke.jpg" 
                description="A lighter taste with no sugar and no calories."
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-8">Our Story</h2>
            <p className="text-lg text-center max-w-3xl mx-auto">
              Since 1886, Coca-Cola has been refreshing the world. What began as a single product sold in Atlanta, Georgia, is now a global brand with thousands of beverages consumed by people in more than 2000 countries.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="bg-red-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-4">Coca-Cola Company</h3>
              <p>Refreshing the world, one story at a time</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul>
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Products</a></li>
                <li><a href="#" className="hover:underline">Sustainability</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:opacity-75">Facebook</a>
                <a href="#" className="hover:opacity-75">Twitter</a>
                <a href="#" className="hover:opacity-75">Instagram</a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; {new Date().getFullYear()} The Coca-Cola Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    x
      {/*<Script type="module" src="https://widget.dev.aichat.site/dist/ai-chat-widget.js" id="ai-chat-widget" data-api-key="cm67hqxw1003z76mticgo3svk" data-org-id="organization-test-953841a0-4323-4eab-8642-8a392512983e"></Script>*/}
    {/*<Script type="module" src="https://widget.dev.aichat.site/dist/ai-chat-widget.js" id="ai-chat-widget" data-api-key="cm5q7cx0h00al1zery9bhydxk" data-org-id="organization-test-abeb26d7-6a69-4877-92f3-cf14c348e0d0"></Script>*/}
      {/*prod}*/}
    {/*<Script type="module" src="https://widget.aichat.com/dist/ai-chat-widget.js" id="ai-chat-widget" data-api-key="cm5xlaffm003lv0jjtavnewn6" data-org-id="organization-live-462e6b2f-cfe8-49bd-8441-54de4781bdea"></Script>*/}
    {/*stag}*/}
    <Script type="module" src="https://widget.staging.aichat.site/dist/ai-chat-widget.js" id="ai-chat-widget" data-api-key="cm6j08bkg000213uxb3zc14pa" data-org-id="organization-test-4f270bdd-6a86-43d7-a61c-cf8ed0d03520"></Script>
    </div>

  )
}

