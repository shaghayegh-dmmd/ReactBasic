import axios from "axios";
import React,{useEffect} from "react";


const BASE_URL = "https://jsonplaceholder.typicode.com";

const ConcurrencyAxios = () => {
    useEffect(() =>{
        getAll();

    }, []);



    const getAll = () => {
        Promise.all([
            axios.get(`${BASE_URL}/Posts`),
            axios.get(`${BASE_URL}/Comments`),
        ])
        .then(
            axios.spread((posts,comments) => {
                console.log(posts.data,comments.data)
            })
        )
        .catch((error) => {
            console.log(error);
        });
    };
    return <div>ConcurrencyAxios && ConcurrencyAxios.map</div>
}
export default ConcurrencyAxios;