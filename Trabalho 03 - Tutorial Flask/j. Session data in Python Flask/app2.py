# j. Session data in Python Flask

from flask import Flask, session, redirect, url_for, escape, request

app = Flask(__name__)
app.secret_key = 'any random string'



@app.route('/')
def index():
    if 'username' in session:
        username = session['username']
        return 'Logged in as ' + username + '<br>' + "<b><a href = '/logout'>click here to log out</a></b>"
    return "You are not logged in <br><a href = '/login'>" + "click here to log in</a>"


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        session['username'] = request.form['username']
        return redirect(url_for('index'))
    return '''
   <form action = "" method = "post">
      <p><input type = text name = username/></p>
      <p<<input type = submit value = Login/></p>
   </form>	
'''

@app.route('/logout')
def logout():
    session.pop('username', None)
    return redirect(url_for('index'))

#session['username'] = 'admin'
#app.run(host='0.0.0.0', port=81)

if __name__ == '__main__':
    app.run(debug=True)