import {create} from 'zustand';

type NewAccountState = {
    isOpen : Boolean;
    onOpen : ()=> void;
    onClose : ()=> void;
}

export const useNewAccount = create<NewAccountState>((set)=>({
    isOpen : false,
    onOpen : ()=>set({isOpen: true}),
    onClose : ()=>set({isOpen: false})
}))