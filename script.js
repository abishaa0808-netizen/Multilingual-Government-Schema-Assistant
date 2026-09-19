const schemes = [
    {
        id: 1,
        name: "Sample Education Scheme",
        sector: "Education",
        description: "A sample scheme for education support.",
        eligibility: "Students who meet the required conditions.",
        benefits: "Educational support and financial assistance.",
        documents: "Identity proof, student ID and required certificates.",
        application: "Apply through the official government portal.",
        link: "https://www.tn.gov.in/"
    },
    {
        id: 2,
        name: "Sample Scholarship Scheme",
        sector: "Scholarships",
        description: "A sample scholarship scheme for eligible students.",
        eligibility: "Eligible students based on the scheme requirements.",
        benefits: "Financial assistance for education.",
        documents: "Identity proof, income certificate and student documents.",
        application: "Apply through the official government portal.",
        link: "https://www.tn.gov.in/"
    },
    {
        id: 3,
        name: "Sample Healthcare Scheme",
        sector: "Healthcare",
        description: "A sample scheme related to healthcare services.",
        eligibility: "Eligible citizens according to scheme rules.",
        benefits: "Healthcare support and related services.",
        documents: "Identity proof and required medical documents.",
        application: "Apply through the official government portal.",
        link: "https://www.tn.gov.in/"
    },
    {
        id: 4,
        name: "Sample Women and Child Scheme",
        sector: "Women & Child Welfare",
        description: "A sample scheme supporting women and children.",
        eligibility: "Eligible women and children according to scheme rules.",
        benefits: "Support services and financial assistance.",
        documents: "Identity proof and required documents.",
        application: "Apply through the official government portal.",
        link: "https://www.tn.gov.in/"
    },
    {
        id: 5,
        name: "Sample Disability Support Scheme",
        sector: "Disability",
        description: "A sample scheme for persons with disabilities.",
        eligibility: "Eligible persons with disabilities.",
        benefits: "Support services and assistance.",
        documents: "Identity proof and disability certificate.",
        application: "Apply through the official government portal.",
        link: "https://www.tn.gov.in/"
    }
];
const sectorCards = document.querySelectorAll(".sector-card");
const schemeContainer = document.getElementById("schemeContainer");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const detailsSection = document.getElementById("detailsSection");
const schemeDetails = document.getElementById("schemeDetails");
const chatMessages = document.getElementById("chatMessages");
const userQuestion = document.getElementById("userQuestion");
const askButton = document.getElementById("askButton");
const languageSelect = document.getElementById("languageSelect");
sectorCards.forEach(function(card) {
    card.addEventListener("click", function() {
        const selectedSector = card.getAttribute("data-sector");
        displaySchemes(selectedSector);
    });
});
function displaySchemes(sector) {
    const filteredSchemes = schemes.filter(function(scheme) {
        return scheme.sector === sector;
    });
    schemeContainer.innerHTML = "";
    if (filteredSchemes.length === 0) {
        schemeContainer.innerHTML =
            "<p>No schemes found for this sector.</p>";
        return;
    }
    filteredSchemes.forEach(function(scheme) {
        const schemeCard = document.createElement("div");
        schemeCard.className = "scheme-card";
        schemeCard.innerHTML = `
            <h3>${scheme.name}</h3>
            <p>${scheme.description}</p>
            <button onclick="showSchemeDetails(${scheme.id})">
                View Details
            </button>
        `;
        schemeContainer.appendChild(schemeCard);
    });
}
function showSchemeDetails(schemeId) {
    const scheme = schemes.find(function(item) {
        return item.id === schemeId;
    });
    if (!scheme) {
        return;
    }
    detailsSection.style.display = "block";
    schemeDetails.innerHTML = `
        <h3>${scheme.name}</h3>
        <p>
            <strong>Sector:</strong>
            ${scheme.sector}
        </p>
        <p>
            <strong>Description:</strong>
            ${scheme.description}
        </p>
        <p>
            <strong>Eligibility:</strong>
            ${scheme.eligibility}
        </p>
        <p>
            <strong>Benefits:</strong>
            ${scheme.benefits}
        </p>
        <p>
            <strong>Documents Required:</strong>
            ${scheme.documents}
        </p>
        <p>
            <strong>Application:</strong>
            ${scheme.application}
        </p>
        <a href="${scheme.link}" target="_blank">
            Visit Official Government Website
        </a>
    `;
    detailsSection.scrollIntoView({
        behavior: "smooth"
    });
}
searchButton.addEventListener("click", searchSchemes);
function searchSchemes() {
    const searchText = searchInput.value
        .toLowerCase()
        .trim();
    if (searchText === "") {
        schemeContainer.innerHTML =
            "<p>Please enter a scheme name or keyword.</p>";
        return;
    }
    const results = schemes.filter(function(scheme) {
        return (
            scheme.name.toLowerCase().includes(searchText) ||
            scheme.sector.toLowerCase().includes(searchText) ||
            scheme.description.toLowerCase().includes(searchText)
        );
    }
);
    schemeContainer.innerHTML = "";
    if (results.length === 0) {
        schemeContainer.innerHTML =
            "<p>No matching schemes found.</p>";
        return;
    }
    results.forEach(function(scheme) {
        const schemeCard = document.createElement("div");
        schemeCard.className = "scheme-card";
        schemeCard.innerHTML = `
            <h3>${scheme.name}</h3>
            <p>${scheme.description}</p>
            <p>
                <strong>Sector:</strong>
                ${scheme.sector}
            </p>
            <button onclick="showSchemeDetails(${scheme.id})">
                View Details
            </button>
        `;
        schemeContainer.appendChild(schemeCard);
    }
);
}
searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        searchSchemes();
    }
}
);
askButton.addEventListener("click", askAI);
function askAI() {
    const question = userQuestion.value.trim();
    if (question === "") {

        return;
    }
    addChatMessage(question, "user");
    const response =
        "The Agentic AI will answer your government scheme question here after the backend and LLM are connected.";
    addChatMessage(response, "ai");
    userQuestion.value = "";
}
function addChatMessage(message, sender) {
    const messageDiv = document.createElement("div");
    messageDiv.className =
        sender === "user"
            ? "user-message"
            : "ai-message";
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop =
        chatMessages.scrollHeight;
}
languageSelect.addEventListener("change", function() {
    const selectedLanguage =
        languageSelect.value;
    console.log(
        "Selected language:",
        selectedLanguage
    );
}
);

