const tools = require("./tools");

function runAgent(question, language) {
    return {
        question: question,
        language: language,
        message: "Agent is ready to search schemes.",
        toolsAvailable: Object.keys(tools)
    };
}

module.exports = runAgent;