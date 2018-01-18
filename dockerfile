FROM node

MAINTAINER Jerry <xuxji.123@163.com>


WORKDIR /home/products/tedit_node

EXPOSE 3000

CMD ["npm","start"]