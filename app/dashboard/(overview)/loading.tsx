import DashboardSkeleton from '@/app/ui/skeletons';
 
// loading.tsx is put here to ensure it only applies to the dashboard overview page
export default function Loading() {
  // Self-implemented skeleton loading div
  return <DashboardSkeleton />;
}