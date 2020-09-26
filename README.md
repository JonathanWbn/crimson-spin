# Random Crimson

A fortune wheel to randomly select a team member.

## Deployment

This app is using the [Next.js](https://nextjs.org/) framework and is deployed via a [public docker container](https://hub.docker.com/repository/docker/jonathanwieben/randomcrimson) to [randomcrimson.unity.epages.com](https://randomcrimson.unity.epages.com/).

When there is a new commit pushed to the `master` branch, the `jonathanwieben/randomcrimson:latest` image is automatically updated.

For the deployed instance to use the new docker image, you need to follow the following steps:

```sh
# remove the running container
docker rm -vf randomcrimson
# pull the latest version of the image
docker pull jonathanwieben/randomcrimson:latest
# start a new container (mapping the container port 3000 to localhost:5000)
docker run -p 127.0.0.1:5000:3000 -d --name randomcrimson jonathanwieben/randomcrimson:latest
```
