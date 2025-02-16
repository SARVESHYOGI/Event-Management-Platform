import React from 'react'

function Card() {
  return (
    <div>
      <div>
        <div class="bg-card dark:bg-card-foreground text-card-foreground dark:text-card p-4 rounded-lg shadow-md">
          <img src="https://placehold.co/300" alt="placeholder" class="w-full h-48 object-cover rounded-lg mb-4" />
          <h2 class="text-lg font-bold mb-2">Card Heading</h2>
          <p class="text-sm mb-4">Card Subheading</p>
          <button class="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/80 focus:outline-none">Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Card