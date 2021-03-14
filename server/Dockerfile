FROM python:3
WORKDIR /api
# Install Python libraries
COPY ./requirements.txt /api
RUN pip3 install --no-cache-dir -r requirements.txt
COPY . .
# Expose the port
ENV PORT=5000
EXPOSE 5000
ENV FLASK_APP=app
ENV FLASK_ENV="development"
RUN ls
# Run flask application with host set to 0.0.0.0 for network
# requests to go through docker
CMD ["flask", "run", "--host=0.0.0.0"]
