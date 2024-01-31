import { PixelToPixelDarkLogo } from '@/assets/pixel-to-pixel-dark-logo'

import { BrandLabelMD } from './brand-label-md'
import { BrandLabel } from './brand-label'

export function BrandSection() {
  return (
    <div className="w-full border-b border-border-white-primary py-8 lg:py-12">
      <div className="mx-auto flex max-w-container items-center gap-4 px-5 md:items-start md:gap-5 md:px-8">
        <div className="size-10.5">
          <PixelToPixelDarkLogo width={42} height={42} className="size-10.5" />
        </div>

        <BrandLabel />
        <BrandLabelMD />
      </div>
    </div>
  )
}
