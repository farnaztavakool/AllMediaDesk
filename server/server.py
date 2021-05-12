from flask import Flask,request
import Algorithem1 
from flask_cors import CORS



APP = Flask(__name__)
CORS(APP)
@APP.route("/calculate",methods = ["POST"]) 
def calculate():
    input_data = request.get_json()
    x = input_data["x"]
    y = input_data["y"]
    result = Algorithem1.algo1(x,y)
    return ({
        "result":result
    })

if __name__ == "__main__":
    APP.run(debug = True,port=(int(sys.argv[1]) if len(sys.argv) == 2 else 8010))

