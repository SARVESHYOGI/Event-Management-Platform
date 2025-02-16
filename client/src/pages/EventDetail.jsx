import React from 'react'

function EventDetail() {
  return (
    <div>
      <div class="bg-background text-foreground dark:bg-primary dark:text-primary-foreground min-h-screen p-8">
        <h1 class="text-3xl font-bold mb-4">Product Name</h1>
        <img src="https://openui.fly.dev/openui/600x400.svg?text=Product+Image" alt="Product Image" class="w-full h-72 rounded-lg shadow-lg mb-4" />
        <h2 class="text-xl font-semibold mb-2">Product Description</h2>
        <p class="text-lg text-secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in dui sollicitudin, vel gravida purus ultricies. Sed et magna eu nisl fermentum fringilla. Vivamus auctor felis
          quis libero ultricies, vel ultricies sapien ultricies.
        </p>
      </div>
    </div>
  )
}

export default EventDetail