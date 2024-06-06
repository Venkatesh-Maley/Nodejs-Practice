var nodemailer = require('nodemailer');

var transport = nodemailer.createTransport({
    service : 'gmail',
    auth:{
        user:'venkateshmaley1@gmail.com',
        pass:'mvbs123...'
    }
})

var options = {
    from : 'venkateshmaley1@gmail.com',
    to : 'hemasreemaley@gmail.com',
    subject : 'Testing mail',
    text: 'Node js Project',
}

transport.sendMail(options,(err,info)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('Email is sent'+ info.response)
    }
})