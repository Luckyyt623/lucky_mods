from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker
import os
from dotenv import load_dotenv
from sqlalchemy.exc import SQLAlchemyError

load_dotenv()

Base = declarative_base() 

class Connection:
    def __init__(self):
        self.engine = create_engine(os.getenv("DATABASE_URL"))

    def get_base(self):
        return Base  

    def check_connection(self):
        try:
            with self.engine.connect() as connection:
                print("✅ Connection established successfully.")
        except SQLAlchemyError as e:
            print("❌ Failed to connect.")
            print(f"Error: {e}")

    def DbSession(self):
        Base.metadata.create_all(self.engine) 
        Session = sessionmaker(bind=self.engine)
        return Session()  

dbInstance = Connection()
