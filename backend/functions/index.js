const functions = require("firebase-functions");
const admin = require("firebase-admin");
const vision = require("@google-cloud/vision");
const { Configuration, OpenAIApi } = require("openai");
const axios = require("axios");

// Initialize Firebase Admin SDK
admin.initializeApp();

// Initialize Google Vision Client
const visionClient = new vision.ImageAnnotatorClient();

// Initialize OpenAI API
const openai = new OpenAIApi(
    new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    })
);

// Fetch Pinterest Images
exports.fetchPinterestImages = functions.https.onRequest(async (req, res) => {
    try {
        const { boardUrl } = req.query;
        const accessToken = process.env.PINTEREST_ACCESS_TOKEN;
        const response = await axios.get(`${boardUrl}/pins/`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        const images = response.data.data.map(pin => pin.image.original.url);
        res.status(200).json({ images });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Process Image and Get Labels
exports.processImage = functions.https.onRequest(async (req, res) => {
    try {
        const { imageUrl } = req.body;

        const [result] = await visionClient.labelDetection(imageUrl);
        const labels = result.labelAnnotations.map(label => label.description);

        res.status(200).json({ labels });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Generate Story from Labels
exports.generateStory = functions.https.onRequest(async (req, res) => {
    try {
        const { labels } = req.body;

        const prompt = `Write a creative story based on these themes: ${labels.join(", ")}.`;
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            max_tokens: 300,
        });

        res.status(200).json({ story: response.data.choices[0].text });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
