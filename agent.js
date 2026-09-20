const tools = require("./tools");
const schemes = require("./schemes.json");
function runAgent(question, language) {
    const results = tools.searchSchemes(schemes, question);
    return {
        question: question,
        language: language,
        results: results,
        message: "Agent searched the available government schemes."
    };
}
module.exports = runAgent;