import { v2 as cloudinary } from "cloudinary";

import fs from "fs";

/**
 * The function `uploadOnCloudinary` uploads a file to Cloudinary using the provided local file path.
 * @param localFilePath - The `localFilePath` parameter is the path to the file that you want to upload
 * to Cloudinary. It should be a string representing the local file path on your server or device.
 * @returns The function `uploadOnCloudinary` returns the response object if the file is uploaded
 * successfully, and returns `null` if there is an error or if the `localFilePath` is not provided.
 */
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    console.log("File uploaded successfully", response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath);
    return null;
  }
};

export { uploadOnCloudinary };
