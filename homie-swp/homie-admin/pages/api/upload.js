import multiparty from 'multiparty';

import cloudinary from "cloudinary"
import { mongooseConnect } from "@/lib/mongoose";
import { isAdminRequest } from "@/pages/api/auth/[...nextauth]";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
export default async function handle(req, res) {
  await mongooseConnect();
  await isAdminRequest(req, res);

  const form = new multiparty.Form();
  const { fields, files } = await new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });

  // THIS IS AN ERROR WITH UPLOAD TO IMAGE NEED TO FIX
  console.log('length:', files.file.length);
  const links = [];
  for (const file of files.file) {
    const uploadResult = await cloudinary.v2.uploader.upload(file.path, {
      folder: 'homie-store', // Replace with your desired folder name
      resource_type: 'auto',
    });

    links.push(uploadResult.secure_url);
  }

  return res.json({ links });
}

export const config = {
  api: { bodyParser: false },
};