import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

function AddEvent() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [photoPreview, setPhotoPreview] = useState('https://via.placeholder.com/300x200');
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhotoPreview(URL.createObjectURL(file));
    }
  };
  const onSubmit = data => console.log(data);
  return (
    <>
      <div className="max-w-md mx-auto bg-card text-card-foreground p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Photo Form</h2>
        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="mb-4">
            <img src={photoPreview} alt="Selected" className="w-full h-48 object-cover rounded-lg mb-2" />
            <input
              type="file"
              accept="image/*"
              className="w-full py-2 px-3 bg-gray-100 border rounded-lg"
              {...register("photo", { required: "Photo is required" })}
              onChange={handlePhotoChange}
            />
            {errors.photo && <p className="text-red-500 text-sm">{errors.photo.message}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="heading" className="block text-sm font-medium text-secondary">Heading</label>
            <input type="text" id="heading" name="heading" className="w-full py-2 px-3 bg-input text-input placeholder-input border border-border rounded-lg"
              {...register("heading", { required: true })} required
              placeholder="Enter a heading" />
          </div>

          <div className="mb-4">
            <label htmlFor="subheading" className="block text-sm font-medium text-secondary">Subheading</label>
            <input type="text" id="subheading" name="subheading" className="w-full py-2 px-3 bg-input text-input placeholder-input border border-border rounded-lg"
              {...register("subheading", { required: true })} required
              placeholder="Enter a subheading" />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-secondary">Description</label>
            <textarea id="description" name="description" rows="4" className="w-full py-2 px-3 bg-input text-input placeholder-input border border-border rounded-lg"
              {...register("description", { required: true })} required
              placeholder="Enter a description"></textarea>
          </div>
          <button type='submit' className="w-full bg-primary text-white p-2 rounded bg-black hover:bg-primary-dark transition duration-300">
            submit
          </button>
        </form>

      </div>
    </>
  )
}

export default AddEvent