import { ProjectDeTails } from '@/app/actions/get-project-details'
import { Browsers } from '@/assets/browsers'
import { Devices } from '@/assets/devices'
import { MobileDevice } from '@/assets/mobile-device'

export function ProjectTypeIcon({ type }: { type: ProjectDeTails['type'] }) {
  return (
    <div className="flex size-16  items-center justify-center bg-background-white">
      {type === 'website' ? (
        <Devices className="size-7" />
      ) : type === 'app' ? (
        <MobileDevice className="size-7" />
      ) : (
        <Browsers className="size-7" />
      )}
    </div>
  )
}
