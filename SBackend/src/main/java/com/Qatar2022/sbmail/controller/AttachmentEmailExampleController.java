package com.Qatar2022.sbmail.controller;
 
import java.io.File;
import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import com.Qatar2022.models.AcheteurTransaction;


@CrossOrigin(origins ="http://localhost:4200")
 @Controller
public class AttachmentEmailExampleController {
 
    @Autowired
    public JavaMailSender emailSender;

    @ResponseBody 
    @PostMapping("/sendAttachmentEmail")
    public String sendAttachmentEmail(@RequestBody AcheteurTransaction a) throws MessagingException {
        MimeMessage message = emailSender.createMimeMessage();
 
        boolean multipart = true;
 
        MimeMessageHelper helper = new MimeMessageHelper(message, multipart);
 
        helper.setTo(a.getMail_acheteur());
        helper.setSubject("Notification paiement");

        helper.setText(a.getCorps_mail());
         
       // String path2 = "/home/tran/Downloads/readme.zip";
 
        // Attachment 1
      //  FileSystemResource file1 = new FileSystemResource(new File(path1));
      //  helper.addAttachment("Facture", file1);
 
 
        emailSender.send(message);
 
        return "Email Sent!";
    }
 
}