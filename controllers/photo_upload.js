var cloudinary = require('cloudinary').v2;
const fs = require('fs')

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
})

exports.upload_photo = async (req, res) => {
    const { url } = req.body

    // Upload file to the Cloudinary server
    cloudinary.uploader
    .upload(url)
    .then(result=>{
        res.status(200).send({result})
    })
    .catch(err => console.log(err))
    
    
}