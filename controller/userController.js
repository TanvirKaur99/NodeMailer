var nodemail=require('nodemailer');
var multer=require('multer');

module.exports.openPage=(req,res)=>{

    res.sendFile(__dirname +"/views/form.html");
    
} 
var st=multer.diskStorage({

    destination:(req,file,cb)=>{
            cb(null,__dirname+"/uploads");
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    }
    
    });

    var fileUpload=multer({storage:st}).single('image');

    var transport= nodemail.createTransport({
        service:'gmail',
         auth:{
             user:'randomale393@gmail.com',
            pass:'randomac.@393'
        }
    
    });

module.exports.sendingEmails=(req,res)=>{

    fileUpload(req,res,(err)=>{
        if(err){
            console.log("file uploading failed..",err)
            
         }
         else{
            var mailOptions={
                from:"randomale393@gmail",
                to:req.body.to,
                subject:req.body.subject,
                text:req.body.msg,
                attachments:[{
             
                 //these are for statically uploading images
                     //filename:"codepic.jpg",
                    // path:__dirname+"/uploads/codepic.jpg",
             
             
                    //now here we are uploading images firstly by putting images(which is selected by user)
                     //in upload folder 
                    filename:req.file.filename,
                    path:req.file.path,
               }]
             
             };
             transport.sendMail(mailOptions,(err)=>{

                if(err){
                    console.log("Error in sending emails..." +err);
                }
                else{
                    console.log("mail sent");
                }

        
    })



}
    })
}







