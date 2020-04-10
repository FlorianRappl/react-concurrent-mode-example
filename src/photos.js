function fetchPhotos() {
  return fetch('https://jsonplaceholder.typicode.com/photos').then((res) => res.json());
}

export function createPhotosResource() {
  let status = 'pending';
  let result = undefined;

  const suspender = fetchPhotos().then(
    (photos) => {
      status = 'success';
      result = photos;
    },
    (error) => {
      status = 'error';
      result = error;
    },
  );

  return {
    read() {
      switch (status) {
        case 'pending':
          throw suspender;
        case 'error':
          throw result;
        case 'success':
          return result;
      }
    },
  };
}
