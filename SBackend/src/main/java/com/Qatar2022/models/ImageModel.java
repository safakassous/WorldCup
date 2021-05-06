package com.Qatar2022.models;
import javax.persistence.*;

@Entity
@Table(name = "imageJoueur")

public class ImageModel {

    @Id
    private Long id;
    private String name;
    private String type;
    @Column(name = "picByte", length = 10000000)
    private byte[] picByte;


    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "image_id", referencedColumnName = "id")
    private Joueur joueur;

    public ImageModel() {
        super();
    }

    public ImageModel(String name, String type, byte[] picByte,Long id) {
        this.id=id;
        this.name = name;
        this.type = type;
        this.picByte = picByte;    
    }

    public String getName() {
        return name;
    }
    public void setImageModel(Object objet){   
    }
    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public byte[] getPicByte() {
        return picByte;

    }

    public void setPicByte(byte[] picByte) {

        this.picByte = picByte;
    }

}