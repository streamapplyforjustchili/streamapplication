
const form = document.getElementById("applicationForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const discord = document.getElementById("discord").value.trim();
    const reason = document.getElementById("reason").value.trim();

    const applications = JSON.parse(
        localStorage.getItem("applications") || "[]"
    );

    applications.push({
        discord: discord,
        reason: reason,
        status: "Pending"
    });

    localStorage.setItem("applications", JSON.stringify(applications));

    form.innerHTML = `
        <h2 style="color: #16a34a;">Submitted</h2>
    `;
});
