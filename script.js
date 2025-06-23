
document.getElementById("survey-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((value, key) => { data[key] = value; });

    const message = `
        أصل: ${data.background}
        | الأبوين: ${data.parents}
        | كتب: ${data.books_read}
        | دافع: ${data.motive}
        | الرغبة: ${data.desire}
    `;

    fetch("https://heartbridge-api-backend-4.onrender.com/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message })
    })
    .then(res => res.json())
    .then(result => {
        document.getElementById("response").innerText = result.analysis || "تم الإرسال بنجاح.";
    })
    .catch(err => {
        document.getElementById("response").innerText = "حدث خطأ أثناء الإرسال.";
    });
});
