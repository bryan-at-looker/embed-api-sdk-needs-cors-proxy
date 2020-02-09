This is a combination of Looker's Embed SDK and Typescript/JS SDK. In order to use this, you will need a CORS proxy running in the background.

```
git clone git@github.com:bryan-at-looker/embed-api-sdk-needs-cors-proxy.git
cd embed-api-sdk-needs-cors-proxy
mv .env.example .env
vi .env
```

Configure your .env for your Looker values in LOOKERSDK_BASE_URL, LOOKER_EMBED_HOST, LOOKERSDK_CLIENT_ID, LOOKERSDK_CLIENT_SECRET, LOOKER_EMBED_SECRET

`vi ./demo/demo_user.json`

Configure your embed user variables

`vi ./demo/demo_config.json`

Configure your `dashboardId` variable to embed a dashboard

```
npm install

## fix the bug for StringDecoder in readable-stream:

awk '{gsub(/: StringDecoder/,": any")}1' ./node_modules/@types/readable-stream/index.d.ts > tmp.txt && mv ./tmp.txt ./node_modules/@types/readable-stream/index.d.ts

## Add a redirect from embed.demo to localhost. This is necessary for CORS

echo -e '\n127.0.0.1 embed.demo\n' | sudo tee -a /etc/hosts

## You will need to enter your laptop's password to change the /etc/hosts file

npm start
```

This should get your dashboard up and running, but your API call sdk.me() will fail because of CORS.

In a new terminal window, clone the cors-anywhere package and get it running.

```
cd ~
git clone https://github.com/Rob--W/cors-anywhere.git
cd cors-anywhere
npm install

## optional fix the vulnerabilities
npm audit fix --force
export PORT=9090

## start the server
node server.js
```

It should say:
> Running CORS Anywhere on 0.0.0.0:9090


Return to your browser to https://embed.demo:8080 and refresh the page.
You should see an API response populate under the dashboard