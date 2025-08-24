"use client";
import React, { useState } from 'react';
import Modal from './Modal';
import DiscordIcon from './icons/DiscordIcon';
import TwitterIcon from './icons/TwitterIcon';
import GitHubIcon from './icons/GitHubIcon';

const Footer = () => {
  const [isPrivacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setTermsModalOpen] = useState(false);

  return (
    <>
      <footer className="bg-black text-gray-400 p-4 flex justify-between items-center border-t border-gray-700 text-xs">
        <div>
          <p>&copy; 2025 Radsoft Inc. All Rights Reversed.</p>
        </div>
        <div className="flex gap-4">
          <button onClick={() => setPrivacyModalOpen(true)}>Privacy Policy</button>
          <button onClick={() => setTermsModalOpen(true)}>Terms of Service</button>
        </div>
        <div className="flex gap-4">
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
            <DiscordIcon />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <TwitterIcon />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </a>
        </div>
      </footer>
      <Modal isOpen={isPrivacyModalOpen} onClose={() => setPrivacyModalOpen(false)}>
        <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
        <p>
          This is a sample privacy policy. In a real application, this would contain the actual privacy policy.
        </p>
      </Modal>
      <Modal isOpen={isTermsModalOpen} onClose={() => setTermsModalOpen(false)}>
        <h2 className="text-2xl font-bold mb-4">Terms of Service</h2>
        <p>
          This is a sample terms of service. In a real application, this would contain the actual terms of service.
        </p>
      </Modal>
    </>
  );
};

export default Footer;