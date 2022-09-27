const {cloudinary} = require('./Utils/cloudinary.js');

export default async function handler(req, res){
    try {
        const fileStr = req.body;
        const uploadResponse = await cloudinary.uploader.upload(fileStr.data, {
            upload_preset: process.env.UPLOAD_PRESENT,
        });
        res.json(uploadResponse);
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Something went wrong' });
    }
};