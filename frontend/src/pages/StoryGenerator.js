import React, { useState } from "react";
import { fetchLabels, generateStory } from "../utils";

const StoryGenerator = ({ selectedImage }) => {
    const [story, setStory] = useState("");

    const handleGenerateStory = async () => {
        const { labels } = await fetchLabels(selectedImage);
        const { story } = await generateStory(labels);
        setStory(story);
    };

    return (
        <div>
            <h2>Generated Story</h2>
            <img src={selectedImage} alt="Selected" />
            <button onClick={handleGenerateStory}>Generate Story</button>
            {story && <p>{story}</p>}
        </div>
    );
};

export default StoryGenerator;
