// here we formating the image because our image is showing in binary formate
// So i used this two library-> multer@latest  &&  multer-gridfs-storage

// GridFS storage engine for Multer to store uploaded files directly to MongoDb.

import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import dotenv from 'dotenv';
dotenv.config();
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const storage = new GridFsStorage({
   url: `mongodb+srv://${username}:${password}@cluster0.bsa8hal.mongodb.net/`,
   options: { useNewUrlParser: true },
   file: (request, file) => {
    const match = ["image/png", "image/jpg"];

    if(match.indexOf(file.mimetype) === -1) 
        return`${Date.now()}-blog-${file.originalname}`;

    return {
        bucketName: "photos",
        filename: `${Date.now()}-blog-${file.originalname}`
    }
}
});

export default multer({storage}); 