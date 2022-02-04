# Flask Tutorial: Templates

from flask import Flask
from flask import render_template

app = Flask(__name__)


@app.route('/')
@app.route('/index')


def index():
    users = ['Rosalia', 'Adrianna', 'Victoria']
    return render_template('index3.html', title='Welcome', username=users)


app.run(host='0.0.0.0', port=81)