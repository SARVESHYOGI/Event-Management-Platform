import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLODINARY_API_KEY,
    api_secret: process.env.CLODINARY_API_SECRET_KEY
})

const uploadFileToCloudinary = async (file) => {
    try {
        console.log("Cloud Name:", process.env.CLOUD_NAME);
        console.log("API Key:", process.env.CLODINARY_API_KEY ? "Loaded" : "Missing");
        console.log("API Secret:", process.env.CLODINARY_API_SECRET_KEY ? "Loaded" : "Missing");
        if (!file) {
            throw new Error("No file provided");
        }

        const buffer = file.buffer || Buffer.from(await file.arrayBuffer());

        return new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                { folder: "Event-management-web" },
                (error, uploadResult) => {
                    if (error) {
                        reject(new Error(`Cloudinary Upload Failed: ${error.message}`));
                    } else {
                        resolve(uploadResult);
                    }
                }
            );

            uploadStream.end(buffer); // Ensure buffer exists before calling .end()
        });
    } catch (error) {
        console.error("Cloudinary Upload Error:", error);
        throw error;
    }
};

export default uploadFileToCloudinary