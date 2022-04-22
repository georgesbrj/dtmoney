import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionmodal } from './components/NewTransactionModal';
import { GlobalStyled } from "./styles/global";


Modal.setAppElement('#root');
 
export function App() {

  const [isNewTransactionModalOpen,setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false);
  }


  return (
    <>
       <Header onOpenNewTransactionModel={handleOpenNewTransactionModal} />
       <Dashboard />  

          <NewTransactionmodal
          
            isOpen={isNewTransactionModalOpen}
            onRequestClose={handleCloseNewTransactionModal}
          />  
         
       <GlobalStyled/>
        
    </>
  );
}

 