from flask import Flask
from flask import render_template

# create a Flask application, named app
app = Flask(__name__)

# the (GET) route where we will display our main landing page
@app.route('/')
def index():
    return render_template('index.html')

# run the application
if __name__ == "__main__":
    app.run(debug=True)