FROM node

MAINTAINER Jerry <xuxji.123@163.com>

RUN mkdir -p /home/projects/tedit_node

WORKDIR /home/projects/tedit_node

# add npm package
COPY package.json /home/projects/tedit_node/package.json

RUN npm i --registry=https://registry.npm.taobao.org

# copy code
COPY . /home/projects/tedit_node

EXPOSE 7001

CMD ["npm","start"]