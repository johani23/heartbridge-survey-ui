
document.getElementById("survey-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const formData = {
        user_origin: document.getElementById("user_origin").value,
        user_parents: document.getElementById("user_parents").value,
        user_books: document.getElementById("user_books").value,
        user_motivation: document.getElementById("user_motivation").value,
        user_desire: document.getElementById("user_desire").value,
        user_mother_rel: document.getElementById("user_mother_rel").value,
        user_mother_edu: document.getElementById("user_mother_edu").value,
        other_origin: document.getElementById("other_origin").value,
        other_parents: document.getElementById("other_parents").value,
        other_books: document.getElementById("other_books").value,
        other_motivation: document.getElementById("other_motivation").value,
        other_desire: document.getElementById("other_desire").value,
        other_mother_rel: document.getElementById("other_mother_rel").value,
        other_mother_edu: document.getElementById("other_mother_edu").value,
        chat: document.getElementById("chat").value,
    };

    fetch("https://heartbridge-api-backend-4.onrender.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => {
        alert("✅ تم إرسال البيانات بنجاح");
    })
    .catch(err => {
        alert("❌ حدث خطأ أثناء الإرسال");
        console.error(err);
    });
});
