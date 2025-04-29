from flask import Flask, render_template, request, redirect, url_for, abort
import os
from pymongo import MongoClient
from datetime import datetime

app = Flask(__name__)

# Configuration for static files
app.config['STATIC_FOLDER'] = 'static'
app.config['IMAGE_FOLDER'] = os.path.join(app.config['STATIC_FOLDER'], 'images')
app.config['MOD_IMAGE_FOLDER'] = os.path.join(app.config['IMAGE_FOLDER'], 'mods')

# Ensure directories exist
os.makedirs(app.config['MOD_IMAGE_FOLDER'], exist_ok=True)

# Static mod storage (same as before)
slither_mods = [
    {"id": 1, "name": "Slither Mod 1", "link": "https://www.mediafire.com/file/your_actual_link1", "image": "images/mods/mod1.jpg", "details": "Zoom function , Bot mod , control rotation , Glow effect,big name .", "download_link": "https://www.mediafire.com/file/rvf76lx37mq447u/(@slitherandroidmod)v2-77.apk/file/your_actual_link1", "version": "2.77", "author": "Modder 1"},
    {"id": 2, "name": "Slither Mod 2", "link": "https://www.mediafire.com/file/your_actual_link2", "image": "images/mods/mod2.jpg", "details": "You can easily change Server, High, midium,low graphics available, Respawn button.", "download_link": "https://www.mediafire.com/file/7s9h5fo0xlp4u8g/EXPERIMENTAL_VERSION.apk/file/your_actual_link2", "version": "2.6", "author": "Modder 2"},
    {"id": 3, "name": "Slither Mod 3", "link": "https://www.mediafire.com/file/your_actual_link3", "image": "images/mods/mod3.jpg", "details": "Zoom function, skinless applied .", "download_link": "https://www.mediafire.com/file/rzr974sei3qeqo8/%28%40slitherandroidmod%29mod-2.85%2832bits-armeabi-v7a%29%282%29.apk/file/your_actual_link3", "version": "2.41 skinless", "author": "Modder 3"},
    {"id": 4, "name": "Slither Mod 4", "link": "https://www.mediafire.com/file/your_actual_link4", "image": "images/mods/mod4.jpg", "details": "Customize Slither.io with Mod 4.", "download_link": "https://www.mediafire.com/file/q8o7k5xt631vmvb/%28%40slitherandroidmodM%29mod-2.41.apk/file/your_actual_link4", "version": "2.41", "author": "Modder 4"},
    {"id": 5, "name": "Slither Mod 5", "link": "https://www.mediafire.com/file/your_actual_link5", "image": "images/mods/mod5.jpg", "details": "Customize Slither.io with Mod 5.", "download_link": "https://www.mediafire.com/file/hp0jmdgy6ro2q2x/(@slitherandroidmod)mod-2.86(zoombar)+(1).apk/file/your_actual_link5", "version": "2.86", "author": "Modder 5"},
    {"id": 6, "name": "Slither Mod 6", "link": "https://www.mediafire.com/file/your_actual_link6", "image": "images/mods/mod6.jpg", "details": "Customize Slither.io with Mod 6.", "download_link": "https://www.mediafire.com/file/wwel8uu469qv3f2/(@slitherandroidmod)mod-2.86(zoombar).apk/file/your_actual_link6", "version": "2.86 black screen", "author": "Modder 6"},
    {"id": 7, "name": "Slither Mod 7", "link": "https://www.mediafire.com/file/your_actual_link7", "image": "images/mods/mod7.jpg", "details": "Customize Slither.io with Mod 7.", "download_link": "https://www.mediafire.com/file/dmlhks8is9sklsx/(@slitherandroidmod)mod-2.85(32bits-armeabi-v7a).apk/file/your_actual_link7", "version": "2.85", "author": "Modder 7"},
    {"id": 8, "name": "Slither Mod 8", "link": "https://www.mediafire.com/file/your_actual_link8", "image": "images/mods/mod8.jpg", "details": "Customize Slither.io with Mod 8.", "download_link": "https://www.mediafire.com/file/jcjgtl7nb23oxfq/ii.slither-android-mod-v2.75.apk/file/file/your_actual_link8", "version": "2.75", "author": "Modder 8"},
    {"id": 9, "name": "Slither Mod 9", "link": "https://www.mediafire.com/file/your_actual_link9", "image": "images/mods/mod9.jpg", "details": "Customize Slither.io with Mod 9.", "download_link": "https://www.mediafire.com/file/0hoxqalwhr0g94c/ii.slither-android-mod-v2.41.apk/file/file/your_actual_link9", "version": "2.41", "author": "Modder 9"},
    {"id": 10, "name": "Slither Mod 10", "link": "https://www.mediafire.com/file/your_actual_link10", "image": "images/mods/mod10.jpg", "details": "Customize Slither.io with Mod 10.", "download_link": "https://www.mediafire.com/file/iy9mkbznll46jc1/_Mod_arm64-v8a.apk/file/file/your_actual_link10", "version": "V8", "author": "Modder 10"},
    {"id": 11, "name": "Slither Mod 11", "link": "https://www.mediafire.com/file/your_actual_link11", "image": "images/mods/mod11.jpg", "details": "Customize Slither.io with Mod 11.", "download_link": "https://www.mediafire.com/file/g8yz8blls91tfxe/(@NudMODS)Slither.io+Legend+F2.8.apk/file/file/your_actual_link11", "version": "V8 fixd error", "author": "Modder 11"},
    {"id": 12, "name": "Slither Mod 12", "link": "https://www.mediafire.com/file/your_actual_link12", "image": "images/mods/mod12.jpg", "details": "Customize Slither.io with Mod 12.", "download_link": "https://www.mediafire.com/file/5ni30fe8vla6v15/2.75.apk/file", "version": "1.0", "author": "Modder 12"},
    {"id": 13, "name": "Slither Mod 13", "link": "https://www.mediafire.com/file/your_actual_link13", "image": "images/mods/mod13.jpg", "details": "Customize Slither.io with Mod 13.", "download_link": "https://www.mediafire.com/file/l0svn3e8a5a5k4d/slither.io_Mod_v7.1_base.apk/file/file/your_actual_link13", "version": "V7.1", "author": "Modder 13"},
    {"id": 14, "name": "Slither Mod 14", "link": "https://www.mediafire.com/file/your_actual_link14", "image": "images/mods/mod14.jpg", "details": "Customize Slither.io with Mod 14.", "download_link": "https://www.mediafire.com/file/9kc1xujji7t7d2e/ModV5%2528Right_controls%2529.apk/file/file/your_actual_link14", "version": "V6 right hand", "author": "Modder 14"},
    {"id": 15, "name": "Slither Mod 15", "link": "https://www.mediafire.com/file/your_actual_link15", "image": "images/mods/mod15.jpg", "details": "Customize Slither.io with Mod 15.", "download_link": "https://www.mediafire.com/file/uayvbq42bzi3var/ModV5%2528Left_controls%2529.apk/file/file/your_actual_link15", "version": "V6 left hand", "author": "Modder 15"}
]

minecraft_mods = [
    {
        "id": i,
        "name": f"Minecraft Mod {i}",
        "image": f"images/mods/mc_mod{i}.jpg",
        "details": f"Enhance Minecraft with Mod {i}.",
        "download_link": f"https://www.mediafire.com/minecraft_mod{i}",
        "version": "1.0",
        "author": f"Miner {i}"
    }
    for i in range(1, 4)
]

# MongoDB Configuration
# Replace with your MongoDB Atlas connection string
client = MongoClient("mongodb+srv://myuser:<iflcJxgFAR57IHhO>@cluster0.ofrf2ap.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
db = client['myFirstDatabase']  # Database name
chat_collection = db['chat_messages']  # Collection name

@app.route("/")
def welcome():
    return render_template("welcome.html")

@app.route("/game_selection")
def game_selection():
    return render_template("game_selection.html")

@app.route("/mods/<game>")
def mods(game):
    print(f"Debug: Accessing /mods/{game}")  # Debug print
    if game.lower() == "slitherio":
        return render_template("mods.html",
                             game="Slither.io",
                             mods=slither_mods,
                             game_logo="Slitherio.jpg")
    elif game.lower() == "minecraft":
        return render_template("mods.html",
                             game="Minecraft",
                             mods=minecraft_mods,
                             game_logo="minecraft.jpg")
    print(f"Debug: Invalid game '{game}', redirecting to game_selection")  # Debug print
    return redirect(url_for("game_selection"))

@app.route("/mod_details/<game>/<int:mod_id>")
def mod_details(game, mod_id):
    print(f"Debug: Accessing /mod_details/{game}/{mod_id} with game.lower()={game.lower()}")  # Debug print
    valid_games = ['slitherio', 'minecraft']
    if game.lower() not in valid_games:
        print(f"Debug: Unsupported game '{game}', redirecting to game_selection")  # Debug print
        return redirect(url_for("game_selection"))

    if game.lower() == "slitherio":
        mods_list = slither_mods
        game_name = "Slither.io"
        game_logo = "Slitherio.jpg"
    elif game.lower() == "minecraft":
        mods_list = minecraft_mods
        game_name = "Minecraft"
        game_logo = "minecraft.jpg"

    mod = next((m for m in mods_list if m.get("id") == mod_id), None)
    print(f"Debug: Found mod = {mod}")  # Debug print
    if mod:
        return render_template("mod_details.html",
                             game=game_name,
                             mod=mod,
                             game_logo=game_logo)
    print(f"Debug: Mod not found for id {mod_id}, returning 404")  # Debug print
    return abort(404)

@app.route("/about")
def about():
    return render_template("about.html")

@app.route('/send_message', methods=['POST'])
def send_message():
    message_text = request.form.get('message')
    mod_id = request.form.get('mod_id')
    username = request.form.get('username', 'Anonymous')

    if message_text:
        chat_collection.insert_one({
            "mod_id": int(mod_id),
            "username": username,
            "message": message_text,
            "timestamp": datetime.utcnow()
        })
        return {'status': 'success'}, 200
    return {'status': 'error'}, 400

@app.route('/get_messages')
def get_messages():
    mod_id = request.args.get('mod_id')
    messages = chat_collection.find({"mod_id": int(mod_id)}).sort("timestamp", -1)
    return [{"username": msg["username"], "message": msg["message"], "timestamp": str(msg["timestamp"])} for msg in messages]

# Error handlers
@app.errorhandler(404)
def page_not_found(e):
    print(f"Debug: 404 Error - {e}")  # Debug print
    return render_template('404.html'), 404

@app.errorhandler(500)
def internal_server_error(e):
    print(f"Debug: 500 Error - {e}")  # Debug print
    return render_template('500.html'), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 5000)))
