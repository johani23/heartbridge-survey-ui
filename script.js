
document.getElementById("survey-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const formData = {
        origin: document.getElementById("origin").value,
        parents: document.getElementById("parents").value,
        books: document.getElementById("books").value,
        motivation: document.getElementById("motivation").value,
        desire: document.getElementById("desire").value,
        mother: document.getElementById("mother").value,
        chat: document.getElementById("chat").value
    };

    fetch('https://heartbridge-api-backend-4.onrender.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => {
        alert("✅ تم إرسال الاستبيان بنجاح");
    })
    .catch(err => {
        alert("❌ حدث خطأ أثناء الإرسال");
        console.error(err);
    });
});
