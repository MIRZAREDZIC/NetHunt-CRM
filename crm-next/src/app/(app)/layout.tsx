'use client';

import { NavBar } from '@/components';
import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface DialogContextType {
  buyerDialogOpen: boolean;
  supplierDialogOpen: boolean;
  openBuyerDialog: () => void;
  openSupplierDialog: () => void;
  closeBuyerDialog: () => void;
  closeSupplierDialog: () => void;
}

const DialogContext = createContext<DialogContextType | undefined>(undefined);

export const useDialogContext = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error('useDialogContext must be used within a DialogProvider');
  }
  return context;
};

function DialogProvider({ children }: { children: ReactNode }) {
  const [buyerDialogOpen, setBuyerDialogOpen] = useState(false);
  const [supplierDialogOpen, setSupplierDialogOpen] = useState(false);

  const openBuyerDialog = useCallback(() => setBuyerDialogOpen(true), []);
  const openSupplierDialog = useCallback(() => setSupplierDialogOpen(true), []);
  const closeBuyerDialog = useCallback(() => setBuyerDialogOpen(false), []);
  const closeSupplierDialog = useCallback(() => setSupplierDialogOpen(false), []);

  return (
    <DialogContext.Provider
      value={{
        buyerDialogOpen,
        supplierDialogOpen,
        openBuyerDialog,
        openSupplierDialog,
        closeBuyerDialog,
        closeSupplierDialog,
      }}
    >
      {children}
    </DialogContext.Provider>
  );
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <DialogProvider>
      <NavBar />
      {children}
    </DialogProvider>
  );
}
