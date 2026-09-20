function searchSchemes(schemes, keyword) {
    return schemes.filter(scheme =>
        scheme.name.toLowerCase().includes(keyword.toLowerCase()) ||
        scheme.sector.toLowerCase().includes(keyword.toLowerCase())
    );
}
module.exports = {
    searchSchemes
};