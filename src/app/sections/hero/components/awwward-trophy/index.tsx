import Image from 'next/image'
import { useRef } from 'react'

import { styles, UseCanvas } from '@14islands/r3f-scroll-rig'
import { ScrollScene } from '@14islands/r3f-scroll-rig'
import AwwwardsTrophyModel from '../awwwward-trophy-model/indes'
import { useScrollRig } from '@14islands/r3f-scroll-rig'
import { ASSETS } from '~/constants/assets'

export const AwwwardsTrophy = () => {
  const trackedElement = useRef<HTMLDivElement>(null!)
  const { hasSmoothScrollbar } = useScrollRig()

  return (
    <>
      <div ref={trackedElement} className={styles.hiddenWhenSmooth}>
        <Image
          alt={ASSETS.AWWWARDS.IMAGE.ALT}
          height={360}
          priority
          quality={100}
          src={ASSETS.AWWWARDS.IMAGE.SRC}
          width={250}
        />
      </div>
      {hasSmoothScrollbar && (
        <UseCanvas>
          <ScrollScene track={trackedElement}>
            {(props) => (
              <AwwwardsTrophyModel
                {...props}
                model={ASSETS.AWWWARDS.MODEL_PATH}
              />
            )}
          </ScrollScene>
        </UseCanvas>
      )}
    </>
  )
}
