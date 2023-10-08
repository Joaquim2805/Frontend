FROM node:18-alpine

WORKDIR /app
COPY . ./
COPY /vite-project .



RUN npm install --force

RUN cd vite-project
RUN npm run build


EXPOSE 8000
CMD ["npm", "run", "preview", "--", "--port", "8000"]