import { ConnectWallet, Wallet, WalletDropdown, WalletDropdownDisconnect} from '@coinbase/onchainkit/wallet'; 
  import { Address, Avatar, Name, Identity } from '@coinbase/onchainkit/identity';
  import { color } from '@coinbase/onchainkit/theme';
  import { useAccount } from 'wagmi';

   
  export function WalletComponents() {
    const account = useAccount();
    const address = account.address;
    return (
      <div className="flex justify-end">
        <Wallet>
          <ConnectWallet>
            <Avatar className="h-6 w-6" address ={address}/>
            <Name address ={address}/>
          </ConnectWallet>
          <WalletDropdown>
            <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
              <Avatar address ={address}/>
              <Name address ={address}/>
              <Address className={color.foregroundMuted} />
            </Identity>
            <WalletDropdownDisconnect />
          </WalletDropdown>
        </Wallet>
      </div>
    );
  }