type TQueryParams = Record<string, string>;

const get = (url = window.location.href) => new Proxy({} as TQueryParams, {
  get (target, keyName: string) {
    const urlParams = new URL(url, window.location.origin);

    return urlParams.searchParams.get(keyName);
  },
});

const set = (url: string, params: Object) => {
  const urlObj = new URL(url, window.location.origin);
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      urlObj.searchParams.set(key, value);
    }
  });

  return `${urlObj.pathname}${urlObj.search}`;
};

export const queryParams = {
  get,
  set,
};
