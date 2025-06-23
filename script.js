
document.getElementById("survey-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = {
    user_social_origin: document.getElementById("user-social-origin").value,
    user_parents_status: document.getElementById("user-parents-status").value,
    user_books_read: document.getElementById("user-books-read").value,
    user_motivation: document.getElementById("user-motivation").value,
    user_desire: document.getElementById("user-desire").value,
    user_parents_relation: document.getElementById("user-parents-relation").value,
    user_mother_education: document.getElementById("user-mother-education").value,
    other_social_origin: document.getElementById("other-social-origin").value,
    other_parents_status: document.getElementById("other-parents-status").value,
    other_books_read: document.getElementById("other-books-read").value,
    other_motivation: document.getElementById("other-motivation").value,
    other_desire: document.getElementById("other-desire").value,
    other_parents_relation: document.getElementById("other-parents-relation").value,
    other_mother_education: document.getElementById("other-mother-education").value,
    recent_chat: document.getElementById("recent-chat").value
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
      if (data.recommendation) {
        alert("🔎 التوصية:\n" + data.recommendation);
      } else {
        alert("✅ تم إرسال الاستبيان بنجاح، لكن لم يتم استلام توصية.");
      }
    })
    .catch(err => {
      alert("❌ حدث خطأ أثناء الإرسال");
      console.error(err);
    });
});
