import  { ReactElement,Dispatch,SetStateAction } from "react";
export  interface PropsInput{
    label?:string
    icon?:ReactElement
    inputType?:string
    placeholder?:string
    setValue: Dispatch<SetStateAction<string>> | ((value: string )=>void) 
}