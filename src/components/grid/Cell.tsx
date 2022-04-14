import { CharStatus } from '../../lib/statuses'
import classnames from 'classnames'
import { REVEAL_TIME_MS } from '../../constants/settings'
import { getStoredIsHighContrastMode } from '../../lib/localStorage'

type Props = {
  value?: string
  status?: CharStatus
  isRevealing?: boolean
  isCompleted?: boolean
  position?: number
}

export const Cell = ({
  value,
  status,
  isRevealing,
  isCompleted,
  position = 0,
}: Props) => {
  const isFilled = value && !isCompleted
  const shouldReveal = isRevealing && isCompleted
  const animationDelay = `${position * REVEAL_TIME_MS}ms`
  const isHighContrast = getStoredIsHighContrastMode()

  const classes = classnames(
    'w-14 h-14 border-solid border-2 flex items-center justify-center mx-0.5 text-4xl font-bold rounded dark:text-white',
    {
      'bg-white dark:bg-slate-900 border-gray-200 dark:border-slate-600':
        !status,
      'border-black dark:border-slate-100': value && !status,
      'absent bg-light-grey dark:bg-slate-700 text-white border-light-grey dark:border-slate-700':
        status === 'absent',
      'correct bg-orange-500 text-white border-orange-500':
        status === 'correct' && isHighContrast,
      'present bg-cyan-500 text-white border-cyan-500':
        status === 'present' && isHighContrast,
      'correct bg-trojan-green text-white border-trojan-green':
        status === 'correct' && !isHighContrast,
      'present bg-trojan-yellow text-white border-trojan-yellow':
        status === 'present' && !isHighContrast,
      'cell-fill-animation': isFilled,
      'cell-reveal': shouldReveal,
    }
  )

  return (
    <div className={classes} style={{ animationDelay }}>
      <div className="letter-container" style={{ animationDelay }}>
        {value}
      </div>
    </div>
  )
}
