"use client"

import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="relative h-screen w-full bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{
          backgroundImage: "url('/background.jpg')",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <Heading level="h1" className="text-5xl font-bold mb-4">
          Palladio Jewellers
        </Heading>
        <p className="text-lg max-w-2xl mb-8">
          Discover the epitome of luxury with our exquisite collection of fine
          jewellery.
        </p>
        <Button
          variant="primary"
          size="large"
          onClick={() => (window.location.href = "/collections/all")}
        >
          Shop Now
        </Button>
      </div>
    </div>
  )
}

export default Hero