import { useRecoilState } from "recoil";
import { tempFilter } from "../state/State";

export function useFilter(){
    const [tFilter,setTFilter]=useRecoilState(tempFilter);
    const updateAttribute = (key:any, value:any) => {
        setTFilter((prevObj) => ({
            ...prevObj,
            [key]: value,
        }));
    };
    return {tFilter,updateAttribute};
}   