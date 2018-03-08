import socket
import sys
import signal
import os.path
import json
import pandas as pd
from colorama import init, Fore, Back, Style
init()

def cprint(msg, foreground = "black", background = "white"):
    fground = foreground.upper()
    bground = background.upper()
    style = getattr(Fore, fground) + getattr(Back, bground)
    print(style + msg + Style.RESET_ALL)

df = pd.read_csv('post-interview-large.csv')
df = df.drop('userID', axis=1)
from sklearn.model_selection import train_test_split
y=df['success']
x=df.drop(['success'], axis=1)
from sklearn.linear_model import LinearRegression

regression_model = LinearRegression()
regression_model.fit(x, y)
regression_model.coef_

host = ''

filename = "postInterviewData.txt"

fp = open(filename, "w+")


serverSocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

serverSocket.bind((host,8001))

serverSocket.listen(1)

connectionSocket, connectionAddress = serverSocket.accept()

ackMsg = "Ok"

print("Port is now open for processing")

while True:
    received_msg = connectionSocket.recv(4096)
    received_msg = received_msg.decode()
    beg = received_msg.find("{")
    end = received_msg.find("}") + 1
    fp.write(received_msg[beg:end])
    connectionSocket.send(ackMsg.encode())
    fp.close()
    break

loaded_json = json.loads(received_msg[beg:end])
li=[]
for x in loaded_json:
    li.append(loaded_json[x])
print(li)
aa=[int(x) for x in li]
a = regression_model.predict(aa)
b = a[0]*100

cprint (str(b), "green", "black")