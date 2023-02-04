import 'server-only';

import { createServerClient } from '#/utils/supabase-server';
import NewPost from './new-post';
import Posts from './posts';

// do not cache this page
export const revalidate = 0;

// this component fetches the current posts server-side
// and subscribes to new posts client-side
export default async function BlogPage() {
  // const supabase = createServerClient();
  // const { data } = await supabase.from('posts').select('*');

  // data can be passed from server components to client components
  // this allows us to fetch the initial posts before rendering the page
  // our <RealtimePosts /> component will then subscribe to new posts client-side
  return (
    <>
      <Posts />
      <NewPost />
    </>
  );
}
