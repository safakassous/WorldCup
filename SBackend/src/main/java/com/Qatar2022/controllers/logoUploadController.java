package com.Qatar2022.controllers;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Optional;
import java.util.zip.DataFormatException;
import java.util.zip.Deflater;
import java.util.zip.Inflater;
import com.Qatar2022.models.Joueur;
import com.Qatar2022.models.LogoModelEquipe;
import com.Qatar2022.repository.LogoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.ResponseEntity.BodyBuilder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;


@RestController

@CrossOrigin(origins = "http://localhost:4200")

@RequestMapping(path = "api")

public class logoUploadController {
     @Autowired

    //ImageRepository imageRepository;
    LogoRepository logoRepository;
    Joueur j;


    @PostMapping("/uploadLogo/{equipeId}")

    public BodyBuilder uplaodImage(@RequestParam("imageFile") MultipartFile file,@PathVariable(value = "equipeId") Long equipeId) throws IOException {

        LogoModelEquipe img = new LogoModelEquipe(file.getOriginalFilename(), file.getContentType(),compressBytes(file.getBytes()),equipeId);
        logoRepository.save(img);

        return ResponseEntity.status(HttpStatus.OK);

    }

    @GetMapping(path = { "/getLogo/{equipeId}" })

    public LogoModelEquipe getImage(@PathVariable("equipeId") Long equipeId) throws IOException {

        final Optional<LogoModelEquipe> retrievedImage = logoRepository.findById(equipeId);

        LogoModelEquipe img = new LogoModelEquipe(retrievedImage.get().getName(), retrievedImage.get().getType(),

                decompressBytes(retrievedImage.get().getPicByte()),equipeId);

        return img;
    }

    @DeleteMapping("/deleteLogo/{equipeId}")
	public ResponseEntity<?> deleteImage(@PathVariable(value = "idJoueur") Long equipeId) {
		LogoModelEquipe image = logoRepository.findById(equipeId).orElseThrow(null);
		logoRepository.delete(image);
	    return ResponseEntity.ok().build();
	}
    // compress the image bytes before storing it in the database
    public static byte[] compressBytes(byte[] data) {

        Deflater deflater = new Deflater();
        deflater.setInput(data);
        deflater.finish();
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
        byte[] buffer = new byte[1024];

        while (!deflater.finished()) {
            int count = deflater.deflate(buffer);
            outputStream.write(buffer, 0, count);
        }
        try {
            outputStream.close();

      } catch (IOException e) {
    }
        System.out.println("Compressed Image Byte Size - " + outputStream.toByteArray().length);
        return outputStream.toByteArray();

    }
    // uncompress the image bytes before returning it to the angular application

    public static byte[] decompressBytes(byte[] data) {

        Inflater inflater = new Inflater();
        inflater.setInput(data);
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
        byte[] buffer = new byte[1024];

        try {
            while (!inflater.finished()) {
                int count = inflater.inflate(buffer);
                outputStream.write(buffer, 0, count);
            }

            outputStream.close();

        } catch (IOException ioe) {

        } catch (DataFormatException e) {
        }

        return outputStream.toByteArray();
    }
  
    
}
