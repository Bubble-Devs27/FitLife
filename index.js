const sdk = require("node-appwrite");

module.exports = async function (req, res) {
  try {
    const result = {
      success: true,
      message: "Hello from Appwrite function deployed via GitHub!",
      timestamp: new Date().toISOString()
    };

    res.json(result);
  } catch (error) {
    res.json({
      success: false,
      message: "Error occurred.",
      error: error.message
    });
  }
};
