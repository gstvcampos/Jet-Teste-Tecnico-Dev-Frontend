import { cn } from '@/lib/ultis'

export default function StatusCarTagDesktop({ status }: { status: string }) {
  return (
    <p
      className={cn(
        'badge rounded-md font-medium text-xs',
        status === 'Available'
          ? 'text-green-800 bg-green-100'
          : 'text-red-800 bg-red-100',
      )}
    >
      {status}
    </p>
  )
}
