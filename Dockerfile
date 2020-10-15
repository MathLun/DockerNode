FROM node:latest

RUN mkdir -p $HOME/htam/dockernode/node_modules && chown -R node:node $HOME/htam/dockernode

WORKDIR $HOME/htam/dockernode
COPY package*.json ./
RUN npm i

COPY . .
COPY --chown=node:node . .

USER node
EXPOSE 4000
CMD ["npm", "start"]