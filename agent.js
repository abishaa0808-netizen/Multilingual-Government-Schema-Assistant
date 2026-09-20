function runAgent(question, language)
{
    return {
        question: question,
        language: language,
        message: "Agent is ready."
    };
}
module.exports = runAgent;