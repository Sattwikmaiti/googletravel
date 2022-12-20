

import p1 from './1.gif'
import { useEffect, useState } from "react";
import "../App.css";
import React from 'react'
import { useNavigate } from "react-router-dom";
export default function Log() {
    const nav=useNavigate();
    const [walletAddress, setWalletAddress] = useState("");

    useEffect(() => {
      getCurrentWalletConnected();
      addWalletListener();
    }, [walletAddress]);
  
    const connectWallet = async () => {
      console.log("cloc")
      if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
        try {
          /* MetaMask is installed */
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          setWalletAddress(accounts[0]);
          console.log(accounts[0]);
        } catch (err) {
          console.error(err.message);
        }
      } else {
        /* MetaMask is not installed */
        console.log("Please install MetaMask");
      }
    };
  
    const getCurrentWalletConnected = async () => {
      if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
        try {
          const accounts = await window.ethereum.request({
            method: "eth_accounts",
          });
          if (accounts.length > 0) {
            setWalletAddress(accounts[0]);
            console.log(accounts[0]);
          } else {
            console.log("Connect to MetaMask using the Connect button");
          }
        } catch (err) {
          console.error(err.message);
        }
      } else {
        /* MetaMask is not installed */
        console.log("Please install MetaMask");
      }
    };
  
    const addWalletListener = async () => {
      if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
        window.ethereum.on("accountsChanged", (accounts) => {
          setWalletAddress(accounts[0]);
          console.log(accounts[0]);
        });
      } else {
        /* MetaMask is not installed */
        setWalletAddress("");
        console.log("Please install MetaMask");
      }
    };
  
  return (
    <div>
        
        <nav className="navbar">
        <div className="container">
         
          <div id="navbarMenu" className="navbar-menu">
            <div className="navbar-end is-align-items-center">
              <img src={p1}
               
                onClick={connectWallet}
              />
                <span className="is-link has-text-weight-bold">
                  {walletAddress && walletAddress.length > 0
                    ?  nav('/Map/attraction')
                    : alert("connect wallet")}
                </span>
             
            </div>
          </div>
        </div>
      </nav>
      
    </div>
  )
}
