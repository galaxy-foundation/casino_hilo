import React from "react";
import mark from "../img/bitcoin.svg";
import metamask from "../img/metamask.png";
import "../styles/Bet.css";
export default function Betting() {
  // const [address, setAddress] = React.useState("");

  const handleConnect = () => {
    const { ethereum } = window;
    if (ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((accs) => {
          if (accs.length) {
            // setAddress(accs[0]);
            window.sessionStorage.setItem("connect", "1");
          }
        });
    }
  };

  // React.useEffect(() => {
  //   const { ethereum } = window;
  //   if (ethereum && window.sessionStorage.getItem("connect")) {
  //     handleConnect();
  //   }
  // }, []);
  return (
    <button className="connect-wallet" onClick={handleConnect}>
      <img src={metamask} width={30} height={30} />
      &nbsp; CONNECT
    </button>
  );
}
