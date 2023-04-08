FROM quay.io/xelectra/xasena:latest
RUN git clone https://github.com/HyNO/X-Asena /root/HyNO
WORKDIR /root/HyNO
RUN yarn install --network-concurrency 1
CMD ["node", "bot.js"] 


