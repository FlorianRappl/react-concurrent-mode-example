import * as React from 'react';

export default ({ resource, pending }) => {
  const photos = resource.read();

  return (
    <div style={{ background: pending ? '#ccc' : 'transparent', minHeight: '0.2vh' }}>
      {photos.map((photo) => (
        <div key={photo.id}>
          <a href={photo.url} title={photo.title} target="_blank">
            <img src={photo.thumbnailUrl} />
          </a>
        </div>
      ))}
    </div>
  );
};
