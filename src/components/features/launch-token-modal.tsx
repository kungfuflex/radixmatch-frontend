"use client";

import { useState } from "react";

export function LaunchTokenModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-layer-card rounded-lg border p-6">
        <h2 className="text-lg font-bold">Launch a Token</h2>
        <p className="mt-4">This is where the token launch form will go.</p>
        <button
          onClick={onClose}
          className="mt-4 rounded-lg bg-layer-button px-4 py-2 text-white"
        >
          Close
        </button>
      </div>
    </div>
  );
}