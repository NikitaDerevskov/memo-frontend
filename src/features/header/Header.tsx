import settingsLogo from '../../common/img/icons/settings.svg';
import { useNavigate } from 'react-router-dom';
import backIcon from '../../common/img/icons/back.svg';

export default function Header({ pageName, backRoute } : { pageName: string, backRoute?: string }) {
  const navigate = useNavigate();
  /* TODO refactor to redux */
  let userName = sessionStorage.getItem('userName');

  let handleSettingsClick = () => {
    /* TODO */
    console.log('Navigate to settings');
  };

  let handleBackClick = () => {
    if (backRoute) {
      navigate(backRoute);
    }
  };

  return (
    <header className="flex justify-between border-b-2 p-3">
      <div className="flex space-x-4">
        {/* TODO add component for icon */}
        {backRoute && <img className='header-back w-4 mx-auto cursor-pointer' src={backIcon} onClick={handleBackClick} alt="back"/>}
        <div className="header-page-name">{pageName}</div>
      </div>
      <div className="header-tools flex space-x-4">
        <div className="header-user-name">{userName}</div>
        <div className="header-settings mt-1 cursor-pointer" onClick={handleSettingsClick}>
          <img src={settingsLogo} alt='settings' />
        </div>
      </div>
      {/* TODO add logout */}
    </header>
  );
}
