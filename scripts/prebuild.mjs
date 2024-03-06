import fs from 'node:fs';

const keys = {
  VITE_CHAT_AI_WIDGET_KEY:'VITE_CHAT_AI_WIDGET_KEY',
  VITE_CHAT_WIDGET_APP_ID:'VITE_CHAT_WIDGET_APP_ID',
  VITE_CHAT_WIDGET_BOT_ID:'VITE_CHAT_WIDGET_BOT_ID',
}

const env = {
  prod: asFullPath( '../.env.production'),
};

function asFullPath(path){
  return new URL(path, import.meta.url).pathname;
}

function buildEnvs(envString) {
  return envString
    .split('\n')
    .filter((it) => it.startsWith('VITE'))
    .reduce((obj, it) => {
      const [key, value] = it.split('=');
      obj[key] = value;
      return obj;
    }, {});
}

function run() {
  if (!fs.existsSync(env.prod)) {
    throw new Error('.env.production is required to publish npm');
  }

  const prod = fs.readFileSync(env.prod, 'utf8');
  const prodEnv = buildEnvs(prod);

  if (!prodEnv[keys.VITE_CHAT_AI_WIDGET_KEY]) {
    throw new Error(`${keys.VITE_CHAT_AI_WIDGET_KEY} is required to publish npm. please check 1password`);
  }

  if (prodEnv[keys.VITE_CHAT_WIDGET_APP_ID] || prodEnv[keys.VITE_CHAT_WIDGET_BOT_ID]) {
    throw new Error(`Do not include ${keys.VITE_CHAT_WIDGET_APP_ID} and ${keys.VITE_CHAT_WIDGET_BOT_ID} to .env.production`);
  }
}

run();
