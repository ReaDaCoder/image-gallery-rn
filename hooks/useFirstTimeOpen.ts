import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function useFirstTimeOpen(){
    const [first, setFirst] = React.useState(false);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() =>{
        async function checkIfOpen(){
            try {
                const hasOpened = await AsyncStorage.getItem("hasOpened");
                if(hasOpened === null){
                    // first time
                    setFirst(true);
                } else{
                    setFirst(false);
                }
            } catch(e){
                console.error("error getting", e)
            } finally{
                setLoading(false)
            }
        }
        checkIfOpen();
    }, [])

    return { first, loading};
}