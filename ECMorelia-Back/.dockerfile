FROM postgres:15-alpine

COPY ./init.sql /docker-entrypoint-initdb.d/

EXPOSE 5432
