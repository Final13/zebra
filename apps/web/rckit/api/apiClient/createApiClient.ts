import { omitNull } from '@lsk4/algos';
import { isServer } from '@lsk4/env';
import { Err } from '@lsk4/err';
import { Logger } from '@lsk4/log';
import axios from 'axios';

import { serverBaseURL } from '@/config/config';
import { ApiClient } from '@/rckit/api/apiClient/types';

const log = new Logger({ ns: 'fetcher' });

export function createApiClient(): ApiClient {
  // eslint-disable-next-line no-nested-ternary
  const baseURL = isServer ? serverBaseURL : null; // isDev ? '/' : clientBaseURL;

  // console.log({ baseURL });
  const instance = axios.create(
    omitNull({
      baseURL,
      withCredentials: true,
      headers: isServer ? { Accept: 'application/json', 'Accept-Encoding': 'identity' } : null,
    }),
  ) as ApiClient;

  instance.interceptors.response.use(
    (response) => {
      log.debug('[ok]', response?.config?.url);
      return response.data ?? response;
    },
    (err) => {
      const code = Err.getCode(err);
      if (code === 'ERR_CANCELED') {
        log.debug('[canceled]', err?.config?.url);
      } else {
        // log.error('[err]', Err.getCode(err), err);
        log.error('[err]', code, err?.config?.url, Err.getMessage(err));
      }
      // log.error('[err]', Err.getCode(err), err?.response?.request);
      throw new Err(err?.response?.data?.code ? err?.response?.data : err);
      // log.trace('axios response err', err);
      // return err?.response?.data ?? err;
    },
  );

  instance.update = (cb) => {
    const newOptions = cb(instance.defaults);
    instance.defaults = newOptions;
  };

  return instance;
}

export default createApiClient;
