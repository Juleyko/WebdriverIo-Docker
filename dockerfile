FROM node:16.20.2

ARG CHROME_VERSION="google-chrome-stable"
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list \
    && apt-get update -qqy \
    && apt-get -qqy install \
    ${CHROME_VERSION:-google-chrome-stable} \
    && rm /etc/apt/sources.list.d/google-chrome.list \
    && rm -rf /var/lib/apt/lists/* /var/cache/apt/*

# RUN apt-get install xvfb
# RUN apt-get install firefox-mozilla-build
# RUN Xvfb &
ENV DISPLAY=localhost:0.0
ENV MOZ_HEADLESS=1
# Встановлюємо робочий каталог всередині контейнера
WORKDIR /usr/src/app
# Копіюємо package.json та package-lock.json до робочого каталогу
COPY package*.json ./
# Встановлюємо залежності проекту
RUN npm install
# Копіюємо решту коду додатка в робочий каталог контейнера
COPY . /usr/src/app
# Визначаємо команду для запуску додатку
CMD ["npm", "run", "test:firefox"]


