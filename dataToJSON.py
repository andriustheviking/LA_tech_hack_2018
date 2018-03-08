import socket
import sys
import signal
import os.path

host = ''

filename = "postInterviewData"

if os.path.isfile(filename):
    fp = open(filename, "a")
else:
    fp = open(filename, "w")

serverPort = int(sys.argv[1])

serverSocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

serverSocket.bind((host,serverPort))

serverSocket.listen(1)

connectionSocket, connectionAddress = serverSocket.accept()

print("Port is now open for processing")

while True:
    received_msg = connectionSocket.recv(4096)
    fp.append(received_msg.decode() + "\n")
    signal.signal(signal.SIGINT, signal_handler)



def signal_handler(signal, frame):
    print("Signal Caught, File Closing\n")
    fp.close()
    sys.exit(0)