import { http, createConfig } from 'wagmi'
import { baseSepolia } from 'wagmi/chains'
// import { coinbaseWallet } from 'wagmi/connectors'
// baseSepolia linea
import { metaMask } from 'wagmi/connectors'
export const config = createConfig({
  chains: [baseSepolia],
  connectors: [
    metaMask()
    // coinbaseWallet({
    //   options: {
    //     appName: 'Coinbase',
    //   },
    // }),
  ],
  transports: {
    [baseSepolia.id]: http()
  },
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}
