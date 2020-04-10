import * as React from 'react';
import { createPhotosResource } from './photos';

const List = React.lazy(() => import('./List'));

export default () => {
  const [photosResource, setPhotosResource] = React.useState();
  const [startTransition, isPending] = React.useTransition(1000);

  React.useEffect(() => {
    startTransition(() => {
      setPhotosResource(createPhotosResource());
    });
  }, []);

  return (
    <div>
      <h1>My Sample App</h1>
      <p>Some content here to digest...</p>
      <React.Suspense fallback={<b>Loading ...</b>}>
        <List resource={photosResource} pending={isPending} />
      </React.Suspense>
    </div>
  );
};
