import { PostCreateButton } from '#/components/post-create-button';
import { DashboardShell } from '#/components/dashboard/shell';
import { DashboardHeader } from '#/components/dashboard/header';

export const metadata = {
  title: 'Cont',
};

export default async function DashboardPage() {
  // const user = await getCurrentUser();
  //
  // if (!user) {
  //   redirect(authOptions?.pages?.signIn || '/login');
  // }

  // const posts = await db.post.findMany({
  //   where: {
  //     authorId: user.id,
  //   },
  //   select: {
  //     id: true,
  //     title: true,
  //     published: true,
  //     createdAt: true,
  //   },
  //   orderBy: {
  //     updatedAt: 'desc',
  //   },
  // });

  const posts = [];
  return (
    <DashboardShell>
      <DashboardHeader heading="Posts" text="Create and manage posts.">
        <PostCreateButton />
      </DashboardHeader>
      <div>
        {posts?.length ? (
          <div className="divide-y divide-border rounded-md border">
            {/*{posts?.map((post: any) => (*/}
            {/*  <PostItem key={post.id} post={post} />*/}
            {/*))}*/}
            <h1>Postssss</h1>
          </div>
        ) : (
          <h1>EMpyt</h1>
          // <EmptyPlaceholder>
          //   <EmptyPlaceholder.Icon name="post" />
          //   <EmptyPlaceholder.Title>No posts created</EmptyPlaceholder.Title>
          //   <EmptyPlaceholder.Description>
          //     You don&apos;t have any posts yet. Start creating content.
          //   </EmptyPlaceholder.Description>
          //   <PostCreateButton variant="outline" />
          // </EmptyPlaceholder>
        )}
      </div>
    </DashboardShell>
  );
}
