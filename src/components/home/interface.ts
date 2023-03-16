import  React ,{ReactElement,Dispatch,SetStateAction } from "react";

export interface NavProp {
iconLefth?:ReactElement
iconRigth?:ReactElement
setValue: Dispatch<SetStateAction<string>> | ((value: string )=>void) 
value?:string
}