function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      // Log message upon resolution
      // eslint-disable-next-line no-console
      console.log('Got a response from the API');
      return {
        status: 200,
        body: 'success',
      };
    })
    .catch(() => new Error());
}

export default handleResponseFromAPI;
