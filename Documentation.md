## How to pull from Docker and some docker commands
- First we have to pull the required images from the docker hub 
- using command of (docker pull <image.name>)
- run the image by comand of (docker run <image.name>)
- stop it by command of (docker stop <image.name>)
- to check list of image command is (docker ps or docker ps -a)
- to delete container (docker rm <container-name>) or (docker rm -vf $(docker ps -aq))--> this one use to delete all
- to delete image (docker rmi <image-name>) or (docker rmi -f $(docker images -aq))--> to delete all 

## Docker network and docker compose
- you can create a docker network by command (docker network create <network-name>)
- Docker compose in this you can config docker container as you wanted
- You can do this by making a ".yaml" file and you can make docker by
- command (docker-compose -f <filename.yaml> up)
- and exit it by (docker-compose -f <filename.yaml> down)
- this will start the container and automatic connect them in network

## Docker image and creating it using Docker file 
- you can create your own docker image by making a Dockerfile 
- Dockerfile has instructions for the docker image
- you build it by command (docker build -t <image-name>:version-number (specifying the path where Dockerfile is if in the current directory then "." is used))
- then you can run this image by (docker run <image-name>:version)

## Private Repository using aws ECR
- create a repository on your aws account
- follow the push repository instructions given there
- in this repo you can push multiple versions of the same image but each different image has different private repo


