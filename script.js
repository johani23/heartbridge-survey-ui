document.getElementById("survey-form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById("name").value,
        age: document.getElementById("age").value,
        motivation: document.getElementById("motivation").value
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
        alert("تم إرسال الاستبيان بنجاح ✅");
    })
    .catch(err => {
        alert("حدث خطأ أثناء الإرسال ❌");
        console.error(err);
    });
});
