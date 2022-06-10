import ChinaLogo from "assets/china.png";
import UsLogo from "assets/usa.png";

const ROUTES = {
  connect: "/connect",
  dashboard: "/",
  deposit: "/deposit",
  withdraw: "/withdraw",
  mint: "/mint",
  transferOwnership: "/transfer-ownership",
  leaderboard: "/leaderboard",
};

const ACTIONS = [
  {
    key: "deposit",
    route: ROUTES.deposit,
  },
  {
    key: "withdraw",
    route: ROUTES.withdraw,
  },
  {
    key: "mint",
    route: ROUTES.mint,
  },
  {
    key: "transfer-ownership",
    route: ROUTES.transferOwnership,
  },
  {
    key: "leaderboard",
    route: ROUTES.leaderboard,
  },
];

const supportedLanguages = [
  {
    lang: "en",
    image: UsLogo,
  },
  {
    lang: "cn",
    image: ChinaLogo,
  },
];

//const TON_WALLET_EXTENSION_URL  = 'https://chrome.google.com/webstore/detail/ton-wallet/nphplpgoakhhjchkkhmiggakijnkhfnd'

export { ROUTES, ACTIONS, supportedLanguages };
