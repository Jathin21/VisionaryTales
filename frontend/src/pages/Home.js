import React, { useState } from "react";
import PinterestImages from "./PinterestImages";
import StoryGenerator from "./StoryGenerator";

const Home = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div>
            {!selectedImage ? (
                <PinterestImages onSelectImage={setSelectedImage} />
            ) : (
                <StoryGenerator selectedImage={selectedImage} />
            )}
        </div>
    );
};

export default Home;
