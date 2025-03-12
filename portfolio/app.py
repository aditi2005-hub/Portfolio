from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///portfolio.db'
db = SQLAlchemy(app)

# Models
class Skill(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    level = db.Column(db.Integer, nullable=False)

class Experience(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    company = db.Column(db.String(200), nullable=False)
    period = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)

# Routes
@app.route('/')
@app.route('/index.html')
def index():
    skills = Skill.query.all()
    experiences = Experience.query.all()
    return render_template('index.html', skills=skills, experiences=experiences)

# Add new routes for admin functionality
@app.route('/add_skill', methods=['POST'])
def add_skill():
    name = request.form.get('name')
    level = request.form.get('level')
    new_skill = Skill(name=name, level=level)
    db.session.add(new_skill)
    db.session.commit()
    return redirect(url_for('index'))

@app.route('/add_experience', methods=['POST'])
def add_experience():
    title = request.form.get('title')
    company = request.form.get('company')
    period = request.form.get('period')
    description = request.form.get('description')
    new_experience = Experience(title=title, company=company, period=period, description=description)
    db.session.add(new_experience)
    db.session.commit()
    return redirect(url_for('index'))

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True, port=5000)