import { getItem } from "localforage";

const getStoredReadList = () =>{

    const storedListStr = localStorage.getItem('read-list');

    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }
}

const addToStoredReadList =(id) =>{
    const storedList = getStoredReadList();
    if(storedList.includes(id)){
        // already exist . do not add it
        console.log(id, 'already exist')
    }
    else{
        storedList.push(id);
        const storedListStr =JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
    }
}


// wished list
const getStoredWishList = () =>{

    const storedListStr = localStorage.getItem('read-list');

    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }
}

const addToStoredWishedList =(id) =>{
    const storedList = getStoredWishList();
    if(storedList.includes(id)){
        // already exist . do not add it
        console.log(id, 'already exist')
    }
    else{
        storedList.push(id);
        const storedListStr =JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
    }
}
export {addToStoredReadList, addToStoredWishedList, getStoredReadList}