import { useAccount, useApi } from "@gear-js/react-hooks";
import { ApiLoader } from "@/components";
//import { Header } from "@/components/layout";
import { withProviders } from "@/app/hocs";
import { useWalletSync } from "@/features/wallet/hooks";
import { Routing } from "./pages";
import { useInitSails } from "./app/hooks";
import { CONTRACT_DATA, VIXEL_CONTRACT,  sponsorName, sponsorMnemonic } from "./app/consts";
import "@gear-js/vara-ui/dist/style.css";

function Component() {
  const { isApiReady } = useApi();
  const { isAccountReady } = useAccount();

  // Put your contract id and idl
  
  useInitSails({
    network: 'wss://testnet.vara.network',
    contractId: CONTRACT_DATA.programId, 
    idl: CONTRACT_DATA.idl,
    vouchersSigner: {
      sponsorName,
      sponsorMnemonic
    }
  });

  useInitSails({
    network: 'wss://testnet.vara.network',
    contractId: VIXEL_CONTRACT.programId,
    idl: VIXEL_CONTRACT.idl,
    vouchersSigner: {
      sponsorName,
      sponsorMnemonic
    }

  })
  

  useWalletSync();

  const isAppReady = isApiReady && isAccountReady;

  // App with context
  return (
    <>
      {/*<Header isAccountVisible={isAccountReady} />*/}
      {isAppReady ? <Routing /> : <ApiLoader />}
    </>
  );
}

export const App = withProviders(Component);
