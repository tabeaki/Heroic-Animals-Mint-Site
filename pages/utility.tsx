import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
import { BigNumber, ethers } from "ethers";
import Image from 'next/image';
import Seo from './components/Seo';
import Header from './components/Header';
import Footer from './components/Footer';

import { allowlistAddresses }  from "../public/consts/allowlist";
import { setting }  from "../public/consts/setting";

const { MerkleTree } = require('merkletreejs');
const keccak256 = require('keccak256');

const Home: NextPage = () => {
  let nameMap;
  let addressId = 1;
  
  const [balanceNum, setBalanceNum] = useState(0);
  const [alNum, setAlNum] = useState(0);
  const [mintQuantity, setmintQuantity] = useState(0);
  const [disabledFlag, setDisabledFlag] = useState(false);
  const [allowlistUserAmountData, setAllowlistUserAmountData] = useState(0);

  const abi = [
    "function balanceOf(address owner) external view returns (uint256 balance)",
  ]
  const contractAddress = "0x843f83a60e1B5A3b6437f60439F0398aD788505c"
  useEffect(() => {

  });

  // ミントボタン用
  function MintButton() {

    async function connectWallet() {
      try{
        await (window as any).ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: setting.CAHINID }],
        });
        const provider = await new ethers.providers.Web3Provider((window as any).ethereum);
        await provider.send('eth_requestAccounts', []);
        setDisabledFlag(true);
        const signer = await provider.getSigner();
        const contract = await new ethers.Contract(contractAddress, abi, signer);
        // TotalCount取得
        const address = await signer.getAddress();
        console.log("await contract.balanceOf(address)=" + await contract.balanceOf(address));
        setBalanceNum(await contract.balanceOf(address))
      } catch(e) {
        console.log(e);
      }
      try{
        await (window as any).ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [{
            chainId: setting.CAHINID,
            chainName: setting.CHAIN_NAME,
            nativeCurrency: {
              name: setting.COIN_NAME,
              symbol: setting.COIN_NAME,
              decimals: setting.DECIMALS,
            },
            rpcUrls: [setting.RPC_URLS],
          }],
        });
        console.log('try');
        setDisabledFlag(true);
      }catch(Exeption){
        console.log('Ethereum already Connected');
        console.log('catch');
      }finally{
        console.log('finally');
      }
    }
    
    return <>
    <div className="bg-black pb-16 flex flex-wrap buttom justify-center">
      <div className='px-8 pt-8 lg:px-28 lg:py-28'>
        <Image className="min-w-full" src="/main_grap.png" alt="Main Image" width={2000} height={1125}/>
      </div>
      <div className="m-12 lg:m-32 px-12 py-6 lg:pt-8 lg:px-20 border-2 bg-black text-center border-[#FFFFFF] bg-center bg-contain bg-no-repeat">
        <h1 className="text-2xl lg:text-4xl pt-2 lg:pt-4 lg:pb-6 text-white font-['Impact']">Heroic Animals Utility</h1>
        <h1 className="text-2xl lg:text-4xl pt-2 lg:pt-4 lg:pb-6 text-white font-['Impact']">your HAF</h1>
        <h1 className="text-2xl lg:text-4xl pt-2 lg:pt-4 lg:pb-6 text-white font-['Impact']"> {balanceNum.toString()}</h1>
        { (!disabledFlag && balanceNum < 1000) && <a className="text-2xl lg:text-3xl pt-2 lg:pt-8 lg:pb-8 text-white font-['Impact']">please connect wallet</a>}
        { (!disabledFlag && balanceNum < 1000) && <button type="button" className="text-xl lg:text-2xl py-1 lg:py-3 px-12 lg:px-24 inline-flex justify-center items-center gap-2 rounded-full border border-transparent
        bg-[#FFFFFF] border-yellow-200 font-['Impact'] text-[#99CDDB] hover:yellow-500 hover:bg-[#99CDDB] hover:text-[#FFFFFF] hover:border-[#FFFFFF]
          focus:outline-none focus:ring-2 focus:ring-yellow-200 focus:ring-offset-2 transition-all dark:focus:ring-offset-gray-800" onClick={() => connectWallet()}>
        CONNECT WALLET</button>}
        { (disabledFlag && 7 < balanceNum && balanceNum < 20) && <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfOawiz3pSWUYJB3-YIQ7SUdMsv1SQJ9NWFNk92uzpUH9nfFA/viewform?embedded=true" width="640" height="375" >読み込んでいます…</iframe>}
        { (disabledFlag && 20 < balanceNum) && <a>aaaa</a>}
      </div>
    </div>
    </>
  }

  return (
    <div>
      <Seo
          pageTitle={'Heroic Animals'}
          pageDescription={'Heroic Animals'}
          pageImg={'https://heroic-animals-mint-site.vercel.app/_next/image?url=%2Fmain_grap.png&w=1080&q=75'}
          pageImgWidth={1920}
          pageImgHeight={1005}
      />
      <Header />
      <MintButton/>
      <Footer />
    </div>
    
  );
};

export default Home;
