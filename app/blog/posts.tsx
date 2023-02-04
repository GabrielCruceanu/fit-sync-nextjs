'use client';

import { useEffect, useState } from 'react';
import { useSupabase } from '#/components/supabase-provider';

import type { Database } from '#/db_types';

type Post = Database['public']['Tables']['posts']['Row'];

// realtime subscriptions need to be set up client-side
// this component takes initial posts as props and automatically
// updates when new posts are inserted into Supabase's `posts` table
// export default function Posts({ serverPosts }: { serverPosts: Post[] }) {
// const [posts, setPosts] = useState(serverPosts);
// const { supabase } = useSupabase();
//
// useEffect(() => {
//   // this overwrites `posts` any time the `serverPosts` prop changes
//   // this happens when the parent Server Component is re-rendered
//   setPosts(serverPosts);
// }, [serverPosts]);
//
// useEffect(() => {
//   // ensure you have enabled replication on the `posts` table
//   // https://app.supabase.com/project/_/database/replication
//   const channel = supabase
//     .channel('*')
//     .on(
//       'postgres_changes',
//       { event: 'INSERT', schema: 'public', table: 'posts' },
//       (payload: {
//         new: {
//           id: string;
//           created_at: string;
//           content: string;
//           user_id: string;
//         };
//       }) => setPosts([...posts, payload.new as Post]),
//     )
//     .subscribe();
//
//   return () => {
//     supabase.removeChannel(channel);
//   };
// }, [supabase, setPosts, posts]);
//
// return <pre>{JSON.stringify(posts, null, 2)}</pre>;
// }

export default function Posts() {
  return <h1>Posts</h1>;
}
