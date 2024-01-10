#!/bin/bash

mkdir /app/Sample_data_A /app/Sample_data_B

sshpass (login to server to fetch sample data here)
sshpass (login to server to fetch sample data here)


export FLASK_APP=/app/flask_websocket_server.py
flask run --host=0.0.0.0


