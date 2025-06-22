import nodemailer  from "nodemailer";
import mailGen  from "mailgen";



//Sending OTP code to users via mail
const mail = async (RecieverEmail, Name, Title, Description)=>{
    try{

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
        }});

        const mailGenerator = new mailGen({
            theme: "default",
            product: {
                name: "Mailgen",
                link: "https://mailgen.js/"
            }
        });

        const mail = await mailGenerator.generate({
            body: {
                name: Name,
                intro: "From Outpatient Management System (OMS)",
                table:{
                    data: {
                        item: Title,
                        description: Description,
                        link: "http://localhost:5173"
                    }
                }
            }
        });
        
        const sent = await transporter.sendMail({
            from: "jonesariyo00@gmail.com",
            to: RecieverEmail,
            subject: "OMS "+Title,
            html: mail
        });

        return sent;

    }catch(error){
        throw error;
    }
}


export default mail;