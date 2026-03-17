require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/api/translate', async (req, res) => {
    try {
        const { text, sourceLanguage, targetLanguage } = req.body;

        if (!text || !sourceLanguage || !targetLanguage) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${sourceLanguage}|${targetLanguage}`;
        const response = await axios.get(url);

        let translatedText = '';

        if (response.data && response.data.responseData) {
            translatedText = response.data.responseData.translatedText;
        } else {
            throw new Error("Invalid response from Translation API");
        }

        res.json({ translatedText });

    } catch (error) {
        console.error('Translation error:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Failed to translate' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
