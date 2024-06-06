import { Link, useNavigate } from "react-router-dom";
import user from "../img/user.png"
import edit from '../img/edit.png';
import logout from '../img/log-out.png';
import '../index.css';
import { useEffect,useRef, useState } from "react";

interface BlogCardProps{
    authorName:string;
    title:string;
    content:string;
    description:string;
    publishedDate:Date;
    id:number;
    likes:number;
}

interface DropdownItemProps {
    img: string;
    text: string;
    onClick?: () => void;
  }

export const BlogCard=({id,authorName,title,content,description,publishedDate,}:BlogCardProps)=>{
    return <Link to={`/blog/${id}`}>
        <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex">
        <div className="flex ">
        <Avatar name={authorName} size="small"/>
        </div>
        <div className="font-extralight pl-2 text-sm flex justify-center flex-col">{authorName}</div>
        <div className="flex justify-center flex-col pl-2"><Circle/></div>
        <div className="pl-2 font-thin text-slate-400 text-sm flex justify-center flex-col">
        {publishedDate}
        </div>
        </div>
        <div className="text-xl font-semibold pt-2">
            {title}
        </div>
        <div className="text-md font-thin">
            {description.slice(0,100)+"..."}
        </div>
        </div>
    </Link>    
}

export function Circle(){
    return <div className="h-1 w-1 rounded-full bg-slate-500"></div>
}

export function Avatar({name,size="small"}:{name:string, size:"small"|"big"}){
    return <div className={`relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-600 rounded-full ${size==="small" ? "w-6 h-6":"w-10 h-10"}`}>
        <span className="font-xs font-extralight text-gray-600 dark:text-gray-300">{name[0]}</span>
    </div>
    
}



