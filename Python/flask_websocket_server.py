from flask import Flask
from flask_sock import Sock
import csv, os
from time import sleep
import json

app=Flask(__name__)
sock= Sock(app)
  
  
dir_sample_A='/app/sample_A_csv/'
dir_sample_B='/app/sample_B_csv/'

# #For Windows testing
# dir_sample_A='C:/Python_Test/docker/flask_websock_server/sample_A_csv/'
# dir_sample_B='C:/Python_Test/docker/flask_websock_server/sample_B_csv/'


files_sample_A=os.listdir(dir_sample_A)
files_sample_B=os.listdir(dir_sample_B) 

def map_func(path, files):
    arr=[]
    for f in files:
        arr.append(path+f)
    return arr

full_path_sample_A=sorted(map_func(dir_sample_A, files_sample_A))
full_path_sample_B=sorted(map_func(dir_sample_B, files_sample_B))


@sock.route('/stock')
def stock(ws):
    def main():
        for t, s in zip(full_path_sample_B, full_path_sample_A):
                with open(s, 'r') as a, open(t, 'r') as b:
                    csv_read_a=csv.DictReader(a)
                    csv_read_b=csv.DictReader(b)
                    while True:
                        try:
                            row_a=next(csv_read_a)
                            row_b=next(csv_read_b)
                            send_json_a=json.dumps(row_a)
                            send_json_b=json.dumps(row_b)
                            ws.send(send_json_a)
                            ws.send(send_json_b)
                        except:
                            break
                    
    main()         
 
print('Flask websocket server running on port: 5000')
