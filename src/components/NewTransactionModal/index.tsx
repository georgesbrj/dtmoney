import closeImg from '../../assets/close.svg';
import Modal from 'react-modal';
import { Container,TranasactionTypeContainer,RadioBox } from './style';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { FormEvent, useState } from 'react';
import { api } from '../../services/api';
 

interface NewTransactionmodalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}



export function NewTransactionmodal({ isOpen, onRequestClose }: NewTransactionmodalProps) {
  const [title,setTitle]  = useState('');
  const [value,setValue]  = useState(0);
  const [category,setCategory]  = useState('');
  const [type,setType] = useState('deposit')

  function handleCreateNewTransaction(e:FormEvent){
    e.preventDefault();

    const data =  {
        title,
        value,
        category,
        type
    }

    api.post('/transactions',data)
  }
   

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            >
               
          <button type='button' onClick={onRequestClose} className='react-modal-close'>
                <img src={closeImg} alt="Fechar modal" /> 
          </button>


            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transacao</h2>

                <input 
                    placeholder='Titulo'
                    value={title} 
                    onChange={event => setTitle(event.target.value)}
                />

                <input 
                    type="number" 
                    placeholder='Valor' 
                    value={value} 
                    onChange={event => setValue(Number(event.target.value))}    
                />
                 
                 <TranasactionTypeContainer>
                    <RadioBox
                      type='button'                                          
                      onClick={()=> {setType('deposit')}}                     
                      isActive={type==='deposit'}
                      activeColor="green"
                    >
                        <img src={incomeImg} alt="entrada" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox
                      type='button' 
                      onClick={()=> {setType('withdraw')}} 
                      isActive={type==='withdraw'}   
                      activeColor="red"                      
                    >
                        <img src={outcomeImg} alt="saida" />
                        <span>Sainda</span>
                    </RadioBox>
                    
                </TranasactionTypeContainer> 

                <input 
                   placeholder='Categoria' 
                   value={category} 
                    onChange={event => setCategory(event.target.value)}
                />
               
                <button type="submit">
                    Cadastrar
                </button>
            </Container>


        </Modal>

    );
}