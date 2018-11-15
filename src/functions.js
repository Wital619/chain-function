export function chain (urls) {
  urls.reduce(handlePromisesQueue, Promise.resolve());
};

function getUrlData (url) {
  return fetch(url)
    .then(data => data.json());
}

function handlePromisesQueue (promiseAccum, url) {
  return new Promise(resolve => {
    const currentPromise = promiseAccum
      .then(() => getUrlData(url))
      .then(data => console.log(data));

    resolve(currentPromise);
  });
}