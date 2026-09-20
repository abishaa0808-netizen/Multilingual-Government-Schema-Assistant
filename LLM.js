function generateResponse(question,language, schemeData){
    return {
        question: question,
        language: language,
        schemeData: schemeData,
        message: "LLM response will be generated here."
    };
}
Module.exports = generateResponse;