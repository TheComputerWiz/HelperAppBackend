var cloudinary = require('cloudinary').v2;

cloudinary.config({ 
    cloud_name: 'dwnqwem6e', 
    api_key: '341843288575161', 
    api_secret: 'RqRP-TGQoweKAXmjsknGRPrMDW8'
})

exports.upload_photo = async (req, res) => {
    const {url} = req.body
    
    cloudinary.uploader
    .upload(url)
    .then(result=>{
        res.status(200).send({result})
    })
    .catch(err => console.log(err))
}