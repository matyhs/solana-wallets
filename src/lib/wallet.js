import { 
    PhantomWalletAdapter,
    SolflareWalletAdapter,
    SlopeWalletAdapter
 } from '@solana/wallet-adapter-wallets';
import { WalletReadyState } from '@solana/wallet-adapter-base';

export const getConnectedWallet = () => {

    const phatom = getPhantomWallet();

    if (phatom !== null && phatom.connected) {
        return phatom.name;
    }

    const solflare = getSolflareWallet();

    if (solflare !== null && solflare.connected) {
        return solflare.name;
    }

    const slope = getSlopeWallet();

    if (slope !== null && slope.connected) {
        return slope.name;
    }

    return 'Not connected to any wallet';
}

const getPhantomWallet = () => {
    const adapter = new PhantomWalletAdapter();
    const isInstalled = adapter.readyState === WalletReadyState.Installed;

    if (isInstalled) {
        console.log('Phatom adapter detected');
        return adapter;
    } 

    console.log('Phatom adapter not detected');
    return null;
}

const getSolflareWallet = () => {
    const adapter = new SolflareWalletAdapter();
    const isInstalled = adapter.readyState === WalletReadyState.Installed;

    if (isInstalled) {
        console.log('Solflare adapter detected');
        return adapter;
    } 

    console.log('Solflare adapter not detected');
    return null;
}


const getSlopeWallet = () => {
    const adapter = new SlopeWalletAdapter();
    const isInstalled = adapter.readyState === WalletReadyState.Installed;

    if (isInstalled) {
        console.log('Slope adapter detected');
        return adapter;
    } 

    console.log('Slope adapter not detected');
    return null;
}