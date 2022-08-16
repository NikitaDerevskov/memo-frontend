export default function Header({ pageName } : { pageName: string }) {

  /* TODO refactor to redux */
  let userName = sessionStorage.getItem('userName');


  return (
    <header className="flex justify-between border-b-2 p-3">
      <div className="header-page-name">{pageName}</div>
      <div className="header-tools">
        <div className="header-user-avatar" />
        <div className="header-user-name">{userName}</div>
        <div className="header-settings" />
      </div>
    </header>
  );
}
