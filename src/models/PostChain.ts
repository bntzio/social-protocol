import { web3 } from 'react-native-project-serum-anchor'

export class PostChain {
  publicKey: web3.PublicKey
  timestamp: number
  userId: number
  groupId: number
  status: number

  /* eslint-disable  @typescript-eslint/no-explicit-any */
  constructor(publicKey: web3.PublicKey, accountData: any) {
    this.publicKey = publicKey
    this.timestamp = accountData.ts
    this.userId = accountData.uid
    this.groupId = accountData.gid
    this.status = accountData.st
  }

  get key() {
    return this.publicKey.toBase58()
  }
}
