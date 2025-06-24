from flask import Flask, request, jsonify
from flask_cors import CORS
import os

# طباعة المسار الحالي والملفات المتوفرة
print("Current working directory:", os.getcwd())
print("Files in directory:", os.listdir())

# استيراد الدالة مع معالجة المسار
try:
    from pairwise_model_selector import select_model
except ImportError as e:
    print(f"ImportError: {e}")
    # محاولة استيراد بديل لو كان المشروع داخل src/
    try:
        from src.pairwise_model_selector import select_model
    except ImportError as e2:
        print(f"Fallback ImportError: {e2}")
        select_model = None

app = Flask(__name__)
CORS(app)

@app.route("/")
def health_check():
    return jsonify({"message": "Heartbridge backend is running successfully."})

@app.route("/select-model", methods=["POST"])
def select_model_route():
    data = request.get_json()
    pattern1 = data.get("pattern_1")
    pattern2 = data.get("pattern_2")

    if not select_model:
        return jsonify({"error": "Model selector not loaded."}), 500

    model_name = select_model(pattern1, pattern2)
    return jsonify({"model": model_name})

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=10000)
