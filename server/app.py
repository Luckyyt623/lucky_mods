from flask import Flask
from dotenv import load_dotenv
import os
from database.connection import dbInstance
import models.models  

app = Flask(__name__)
load_dotenv()

dbInstance.check_connection()
session = dbInstance.DbSession()  

app.run(port=os.getenv("PORT"), debug=True)
