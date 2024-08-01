const crypto = require("crypto");

const hashString = (String) => crypto.createHash("md5").digest("hex");


module.exports = hashString;