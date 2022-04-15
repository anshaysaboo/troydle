import { ChartBarIcon, InformationCircleIcon } from '@heroicons/react/outline'
import { FaInstagram } from 'react-icons/fa'

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
    <div className="navbar bg-trojan-red">
      <div className="navbar-content px-5">
        <InformationCircleIcon
          className="h-6 w-6 mr-2 cursor-pointer stroke-trojan-yellow"
          onClick={() => setIsInfoModalOpen(true)}
        />
        {/* <div className="bg-trojan-red p-1 rounded"> */}
        <p className="text-xl ml-9 font-bold text-trojan-yellow">Troydle</p>
        {/* </div> */}

        <div className="right-icons">
          <ChartBarIcon
            className="h-6 w-6 mr-3 cursor-pointer stroke-trojan-yellow"
            onClick={() => setIsStatsModalOpen(true)}
          />

          <FaInstagram
            className="h-6 w-6 mr-3 cursor-pointer text-trojan-yellow"
            onClick={() => window.open('https://www.instagram.com/usctroydle/')}
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
