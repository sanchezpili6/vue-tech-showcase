FROM python:3.9.7-slim-buster

RUN apt-get update \
    && apt-get -y install libpq-dev gcc \
    && pip install psycopg2

WORKDIR /app

COPY . /app

EXPOSE 3001

RUN pip install -r requirements.txt

ENTRYPOINT ["python", "app.py"]
