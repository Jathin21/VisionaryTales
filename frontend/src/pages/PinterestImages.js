import React, { useState, useEffect } from "react";
import ImageCard from "../components/ImageCard";
import { fetchPinterestImages } from "../utils";

const PinterestImages = ({ onSelectImage }) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            const { images } = await fetchPinterestImages("https://api.pinterest.com/v1/boards/YOUR_BOARD");
            setImages(images);
        };
        fetchImages();
    }, []);

    return (
        <div>
            <h2>Select an Image</h2>
            <div>
                {images.map((image, index) => (
                    <ImageCard key={index} image={image} onClick={onSelectImage} />
                ))}
            </div>
        </div>
    );
};

export default PinterestImages;
