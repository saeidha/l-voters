// ConnectWallet.js
import React from 'react'
import { useConnect, useAccount } from 'wagmi'
import { metaMask, injected } from 'wagmi/connectors'

const ConnectWallet = () => {
  const { connect, connectors, error} = useConnect()
  const { address, isConnected } = useAccount()

  return (
    <div style={{ width: '150px', height: '120px', backgroundColor: 'black'}}>
      {isConnected ? (
        <div>
          <p>Connected to {address}</p>
        </div>
      ) : (
        <div>
          {connectors.map((connector) => (
            <button
              key={connector.id}
              onClick={() => connect({ connector })}
              disabled={!connector.ready} //|| isConnecting}
            >
              {connector.name}
              {!connector.ready && ' (unsupported)'}
              {/* {isConnecting && connector.id === pendingConnector?.id && ' (connecting)'} */}
            </button>
          ))}

          {error && <div>{error.message}</div>}
        </div>
      )}
    </div>
  )
}

export default ConnectWallet
