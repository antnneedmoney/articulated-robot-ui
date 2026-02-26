from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/execute", methods=["POST"])
def execute():
    data = request.json
    command = data.get("command")
    print("Received:", command)
    return jsonify({"status": "Command received", "command": command})

if __name__ == "__main__":
    app.run(debug=True)