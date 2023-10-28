FROM node:18 AS env
ENV NODE_PATH=/node_modules PATH="/node_modules/.bin:${PATH}" NUXT_HOST="[::]"
RUN echo "--modules-folder $NODE_PATH" > /root/.yarnrc
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM env AS dev
COPY . .
CMD iles dev
