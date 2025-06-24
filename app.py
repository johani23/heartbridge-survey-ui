from flask import Flask, jsonify, request
from flask_cors import CORS
from pairwise_model_selector import select_model
import yaml

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return jsonify({"message": "Heartbridge backend is running successfully."})

@app.route("/select_model", methods=["POST"])
def get_model():
    data = request.json
    pattern1 = data.get("pattern_1")
    pattern2 = data.get("pattern_2")
    selected = select_model(pattern1, pattern2)
    return jsonify({"selected_model": selected})

@app.route("/popup_prompts", methods=["GET"])
def get_prompts():
    with open("popup_prompts.yaml", "r", encoding="utf-8") as f:
        prompts = yaml.safe_load(f)
    return jsonify(prompts)
