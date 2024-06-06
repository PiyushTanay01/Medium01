import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

export interface Blog{
    "content":string;
    "title":string;
    "description":string;
    "id":number;
    "createdAt":Date;
    "author":{
        "name":string;
    }
}
export interface Blog1{
    "content":string;
    "title":string;
    "description":string;
    "id":number;
    "createdAt":Date;
    "author":{
        "name":string;
        "about":string;
    }
}
export const useUser=({id}:{id:string})=>{
    const [loading,setLoading]=useState(true);
    const [name,setName]=useState("P");
    const [about,setAbout]=useState("Blogger")

    const User1=async()=>{
        try{
            const res=await axios.get(`${BACKEND_URL}/api/v1/user/${id}`,{
                headers:{
                    Authorization:localStorage.getItem("token")
                }
            });
            setName(res.data.name);
            setAbout(res.data.about);
            setLoading(false);
        }
        catch(e)
        {
            console.log("Error while fetching data:",e);
        }
    }
    useEffect(()=>{
        User1();
    },[id]);

    return {
        loading,
        name,
        about
    }
}

export const useBlog=({id}:{id:string})=>{
    const [loading,setLoading]=useState(true);
    const [blog,setBlog]=useState<Blog1>();
    
    const Blog1=async()=>{
        try{
            const res=await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
                headers:{
                Authorization:localStorage.getItem("token")
                }
            });
            setBlog(res.data.blog);
            setLoading(false);
        }
        catch(e)
        {
            console.log("Error while fetching data:",e);
        }
    }

    useEffect(()=>{
        Blog1();
    },[id])

    return {
        loading,
        blog
    }
}

export const useBlogs=()=>{
    const [loading,setLoading]=useState(true);
    const [blogs,setBlogs]=useState<Blog[]>([]);
    
    const Blog1=async()=>{
        try{
            const res=await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{headers:{
                Authorization:localStorage.getItem("token")}
            });
            console.log(res.data);
            setBlogs(res.data.blogs);
            setLoading(false);
        }
        catch(e)
        {
            console.log("Error while fetching data:",e);
        }
    }

    useEffect(()=>{
        Blog1();
    },[])

    return {
        loading,
        blogs
    }
}

export const useUserBlogs=()=>{
    const [loading,setLoading]=useState(true);
    const [blogs,setBlogs]=useState<Blog[]>([]);

    const fetchBlogs=async()=>{
        try{
            const res=await axios.get(`${BACKEND_URL}/api/v1/blog/myblogs`,{
                headers:{
                    Authorization:localStorage.getItem("token")}
            });
            console.log(res.data);
            setBlogs(res.data.blogs);
            setLoading(false);
        }
        catch(e){
            console.log(e);
            console.log('Error while fetching blogs:',e);
            setLoading(false);
        }
    };
    useEffect(()=>{
        fetchBlogs();
    },[]);

    return {loading,blogs}
}

export const useSearchedBlogs=()=>{
    const [loading,setLoading]=useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const handleSearch = async (query:string) => {
      try {
            const res=await axios.get(`${BACKEND_URL}/api/v1/blog/search?query=${query}`,{
                headers:{
                   Authorization:localStorage.getItem("token")}
        });
        
        setBlogs(res.data.blogs);
        console.log(res.data);
        console.log(blogs);
      } 
      catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };
    useEffect(()=>{
        handleSearch(query);
    },[]);

    return{ loading,blogs}
}