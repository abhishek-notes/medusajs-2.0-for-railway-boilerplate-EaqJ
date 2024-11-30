// src/modules/home/components/collections/index.jsx

"use client"

import { Button, Heading } from "@medusajs/ui"

const Collections = () => {
  return (
    <div className="py-16 px-4 text-center">
      <Heading level="h2" className="text-3xl font-bold mb-8">
        Explore Our Collections
      </Heading>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Collection 1 */}
        <div className="relative group">
          <img
            src="/images/ring.jpg"
            alt="Engagement Rings"
            className="w-full h-64 object-cover"
          />
          <div className="collection-overlay">
            <Button
              className="collection-button"
              onClick={() =>
                (window.location.href = "/collections/engagement-rings")
              }
            >
              View Collection
            </Button>
          </div>
          <h3 className="mt-4 text-xl font-semibold">Engagement Rings</h3>
        </div>
        {/* Collection 2 */}
        <div className="relative group">
          <img
            src="/images/necklace.jpg"
            alt="Necklaces"
            className="w-full h-64 object-cover"
          />
          <div className="collection-overlay">
            <Button
              className="collection-button"
              onClick={() => (window.location.href = "/collections/necklaces")}
            >
              View Collection
            </Button>
          </div>
          <h3 className="mt-4 text-xl font-semibold">Necklaces</h3>
        </div>
        {/* Collection 3 */}
        <div className="relative group">
          <img
            src="/images/earring.jpg"
            alt="Earrings"
            className="w-full h-64 object-cover"
          />
          <div className="collection-overlay">
            <Button
              className="collection-button"
              onClick={() => (window.location.href = "/collections/earrings")}
            >
              View Collection
            </Button>
          </div>
          <h3 className="mt-4 text-xl font-semibold">Earrings</h3>
        </div>
      </div>
    </div>
  )
}

export default Collections