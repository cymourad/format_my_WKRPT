# image on which we build the entire system
FROM python:3.7-alpine

# the name of out root directory
WORKDIR /format_my_wkrpt

# the name of the file hosting the falsk app
ENV FLASK_APP app.py

# docker containers must have flask running on all hosts (a.k.a. 0.0.0.0)
ENV FLASK_RUN_HOST 0.0.0.0

# Install gcc so Python packages such as MarkupSafe and SQLAlchemy can compile speedups
RUN apk add --no-cache gcc musl-dev linux-headers

# copy all the files and directories (minus the stuff in .dockerignore)
COPY . .

# install all the depnedecies needed
RUN pip install -r requirements.txt

# Set the default command for the container to flask run
CMD ["flask","run"]