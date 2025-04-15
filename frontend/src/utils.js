export const fetchPinterestImages = async (boardUrl) => {
    try {
        const response = await fetch(`/fetchPinterestImages?boardUrl=${boardUrl}`);
        if (!response.ok) {
            console.error("Failed to fetch Pinterest images:", response.status, response.statusText);
            throw new Error("Failed to fetch Pinterest images");
        }
        const data = await response.json();
        console.log("Fetched Pinterest images:", data);
        return data;
    } catch (error) {
        console.error("Error in fetchPinterestImages:", error.message);
        throw error;
    }
};

export const fetchLabels = async (imageUrl) => {
    try {
        const response = await fetch("/processImage", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ imageUrl }),
        });
        if (!response.ok) {
            console.error("Failed to process image:", response.status, response.statusText);
            throw new Error("Failed to process image");
        }
        const data = await response.json();
        console.log("Processed image labels:", data);
        return data;
    } catch (error) {
        console.error("Error in fetchLabels:", error.message);
        throw error;
    }
};

export const generateStory = async (labels) => {
    try {
        const response = await fetch("/generateStory", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ labels }),
        });
        if (!response.ok) {
            console.error("Failed to generate story:", response.status, response.statusText);
            throw new Error("Failed to generate story");
        }
        const data = await response.json();
        console.log("Generated story:", data);
        return data;
    } catch (error) {
        console.error("Error in generateStory:", error.message);
        throw error;
    }
};
