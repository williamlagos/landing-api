FROM williamlagos/eos:latest
RUN pacman -Syu --noconfirm nodejs npm

ADD package.json .
RUN npm install

WORKDIR /app
ADD . /app
CMD npm start