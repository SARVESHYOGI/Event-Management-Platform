import React from 'react'

function Profile() {
  return (
    <div class="bg-card dark:bg-card-foreground text-card-foreground dark:text-card p-4 rounded-lg shadow-md">
      <img src="https://placehold.co/150" alt="Profile Picture" class="w-24 h-24 rounded-full mx-auto mb-4" />
      <h2 class="text-lg font-bold text-center">John Doe</h2>
      <p class="text-sm text-center">Web Developer</p>
      <ul class="text-sm mt-4">
        <li>Email: johndoe@example.com</li>
        <li>Location: City, Country</li>
        <li>Website: <a href="#" class="text-primary">www.johndoe.com</a></li>
      </ul>
    </div>
  )
}

export default Profile