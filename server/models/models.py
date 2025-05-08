from sqlalchemy import Column, Integer, String, DateTime, func
from database.connection import dbInstance

Base = dbInstance.get_base()

class Mods(Base):
    __tablename__ = "mods"

    id = Column(Integer, primary_key=True)
    modename = Column(String(255))
    modeurl = Column(String(255))
    modeimage = Column(String(255))
    rating = Column(Integer)
    modedesc = Column(String(255))
    modegametype = Column(String(255))
    created_at = Column(DateTime(timezone=True), default=func.now())

class Admin(Base):
    __tablename__ = "admin"

    id = Column(Integer, primary_key=True)
    username = Column(String(255))
    password = Column(String(255))
    