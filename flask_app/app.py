from flask import Flask
from flask import render_template, request

# create a Flask application, named app
app = Flask(__name__)

# the (GET) route where we will display our main landing page
@app.route("/")
def index():
    return render_template("index.html")

# the (POST) route that sends file to back-end for formatting
@app.route("/format", methods=["POST"])
def format():
    data = request.get_json()
    print(data)
    return 200

# run the application
if __name__ == "__main__":
    app.run(debug=True)