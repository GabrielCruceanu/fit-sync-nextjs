import { DashboardShell } from '#/components/application/dashboard/shell';
import { DashboardHeader } from '#/components/application/dashboard/header';
import { PostCreateButton } from '#/components/post-create-button';

export default function DashboardLoading() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Posts" text="Create and manage posts.">
        <PostCreateButton />
      </DashboardHeader>
      <div className="divide-border-200 divide-y rounded-md border">
        {/*<PostItem.Skeleton />*/}
        {/*<PostItem.Skeleton />*/}
        {/*<PostItem.Skeleton />*/}
        {/*<PostItem.Skeleton />*/}
        {/*<PostItem.Skeleton />*/}
      </div>
    </DashboardShell>
  );
}
