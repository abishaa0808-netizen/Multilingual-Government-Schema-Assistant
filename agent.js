function runAgent(question, language)
{
    return {
        question: question,
        language: language,
        message: "Agent is ready."
    };
}
Module.exports = runAgent;