from sqlalchemy import Column, Integer, String, DateTime, func
from database.connection import dbInstance

Base = dbInstance.get_base()

class Mods(Base):
    __tablename__ = "mods"

    id = Column(Integer, primary_key=True , autoincrement=True)
    modname = Column(String(255))
    modurl = Column(String(255))
    modimage = Column(String(255))
    rating = Column(Integer)
    moddesc = Column(String(255))
    modgametype = Column(String(255))
    created_at = Column(DateTime(timezone=True), default=func.now())

class Admin(Base):
    __tablename__ = "admin"

    id = Column(Integer, primary_key=True)
    username = Column(String(255))
    password = Column(String(255))
    