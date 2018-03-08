import socket
import sys
import signal
import os.path
import json
import pandas as pd
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

filename = "postInterviewData"

fp = open(filename, "w+")

serverPort = int(sys.argv[1])

serverSocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

serverSocket.bind((host,serverPort))

serverSocket.listen(1)

connectionSocket, connectionAddress = serverSocket.accept()

ackMsg = "Ok"

print("Port is now open for processing")

while True:
    received_msg = connectionSocket.recv(4096)
    received_msg = received_msg.decode()
    beg = received_msg.find("{")
    end = received_msg.find("}") + 1
    fp.write(received_msg[beg:end] + "\n")
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

print (b)