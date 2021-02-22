// import getConfig from 'next/config';
// const { publicRuntimeConfig } = getConfig();

import { setConfig } from "next/config";
import { publicRuntimeConfig } from "./next.config";

// Make sure you can use "publicRuntimeConfig" within tests.
setConfig({ publicRuntimeConfig });

export const API = publicRuntimeConfig.API;
export const APP_NAME = publicRuntimeConfig.APP_NAME;
export const DOMAIN = publicRuntimeConfig.DOMAIN;
export const PRODUCTION = publicRuntimeConfig.PRODUCTION;
export const FB_APP_ID = publicRuntimeConfig.FB_APP_ID;
