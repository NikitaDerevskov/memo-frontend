import settingsLogo from '../../common/img/icons/settings.svg';

export default function Header({ pageName } : { pageName: string }) {

  /* TODO refactor to redux */
  let userName = sessionStorage.getItem('userName');

  let handleSettingsClick = () => {
    /* TODO */
    console.log('Navigate to settings');
  };

  return (
    <header className="flex justify-between border-b-2 p-3">
      <div className="header-page-name">{pageName}</div>
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
