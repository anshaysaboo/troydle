import {
  ChartBarIcon,
  CogIcon,
  InformationCircleIcon,
} from '@heroicons/react/outline'
import { GAME_TITLE } from '../../constants/strings'

type Props = {
  setIsInfoModalOpen: (value: boolean) => void
  setIsStatsModalOpen: (value: boolean) => void
  setIsSettingsModalOpen: (value: boolean) => void
}

export const Navbar = ({
  setIsInfoModalOpen,
  setIsStatsModalOpen,
  setIsSettingsModalOpen,
}: Props) => {
  return (
    <div className="navbar bg-white dark:bg-transparent">
      <div className="navbar-content px-5">
        <InformationCircleIcon
          className="h-6 w-6 mr-2 cursor-pointer stroke-black dark:stroke-white"
          onClick={() => setIsInfoModalOpen(true)}
        />
        <div className="bg-trojan-red p-1 rounded">
          <p className="text-xl mx-3 font-bold text-trojan-yellow">Troydle</p>
        </div>

        <div className="right-icons">
          <ChartBarIcon
            className="h-6 w-6 mr-3 cursor-pointer stroke-black dark:stroke-white"
            onClick={() => setIsStatsModalOpen(true)}
          />
          {/*<CogIcon
            className="h-6 w-6 cursor-pointer stroke-black"
            onClick={() => setIsSettingsModalOpen(true)}
          />*/}
        </div>
      </div>
      <hr></hr>
    </div>
  )
}
