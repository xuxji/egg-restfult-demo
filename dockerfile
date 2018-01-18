FROM node

MAINTAINER Jerry <xuxji.123@163.com>

WORKDIR /var/jenkins_node/workspace/tedit_node

RUN npm i --registry=https://registry.npm.taobao.org

EXPOSE 7001

CMD ["npm","start"]