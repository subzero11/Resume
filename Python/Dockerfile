FROM python:3.8

ADD . /app

WORKDIR /app

RUN mkdir -p /root/.ssh
  
COPY known_hosts /root/.ssh
# known host file to grab remote server data

RUN apt-get update


RUN apt-get install -y sshpass



# install Python packages
RUN pip3 install -r requirements.txt


CMD [ "bash", "bash_run.sh"]
