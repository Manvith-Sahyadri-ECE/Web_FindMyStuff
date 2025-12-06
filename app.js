// Save reports in localStorage
document.getElementById("reportForm")?.addEventListener("submit", function(e) {
    e.preventDefault();

    let item = {
        name: document.getElementById("itemName").value,
        type: document.getElementById("type").value,
        description: document.getElementById("description").value,
        location: document.getElementById("location").value
    };

    let data = JSON.parse(localStorage.getItem("reports")) || [];
    data.push(item);
    localStorage.setItem("reports", JSON.stringify(data));

    window.location.href = "success.html";
});

// Search function
function searchItem() {
    let key = document.getElementById("searchBox").value.toLowerCase();
    let data = JSON.parse(localStorage.getItem("reports")) || [];

    let results = data.filter(i => i.name.toLowerCase().includes(key));

    document.getElementById("results").innerHTML =
        results.map(r => `
            <div style="margin:10px 0; padding:10px; border:1px solid #bbb;">
                <b>${r.type}:</b> ${r.name}<br>
                <b>Description:</b> ${r.description}<br>
                <b>Location:</b> ${r.location}
            </div>
        `).join("");
}

// Admin data view
if (document.getElementById("allData")) {
    let data = JSON.parse(localStorage.getItem("reports")) || [];
    document.getElementById("allData").innerHTML =
        data.map(r => `
            <div style="margin:10px 0; padding:10px; border:1px solid #bbb;">
                <b>${r.type}:</b> ${r.name}<br>
                <b>Description:</b> ${r.description}<br>
                <b>Location:</b> ${r.location}
            </div>
        `).join("");
}
