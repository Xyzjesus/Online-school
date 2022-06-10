import { Address, ProviderRpcClient } from 'everscale-inpage-provider';

export enum WalletConnectorType {
  BROWSER_EXTENSION,
}

export const walletConnnectors = [
  {
    type: WalletConnectorType.BROWSER_EXTENSION,
    text: "Ever Wallet",
    isSupported: true,
  },
];

export interface WalletConnector {
  type: WalletConnectorType;
  address?: Address;
}

export async function connect(type: WalletConnectorType): Promise<WalletConnector> {
  switch (type) {
    case WalletConnectorType.BROWSER_EXTENSION:
      return connectWithExtension();

    default:
      break;
  }
  const res = {
    type,
  };
  return res;
}

const ever = new ProviderRpcClient();

const connectWithExtension = async (): Promise<WalletConnector> => {
  if (!(await ever.hasProvider())) {
    throw new Error('Extension is not installed');
  }
  await ever.ensureInitialized();
  const { accountInteraction } = await ever.requestPermissions({
    permissions: ['basic', 'accountInteraction'],
  });
  if (accountInteraction == null) {
    throw new Error('Insufficient permissions');
  }
  await ever.ensureInitialized();

  const selectedAddress = accountInteraction.address;

  return { type: WalletConnectorType.BROWSER_EXTENSION, address: selectedAddress };
};
