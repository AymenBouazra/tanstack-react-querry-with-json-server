import { useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

const ListPosts = () => {
    const queryClient = useQueryClient()
    const fetchData = async ()=>{
        const posts = await axios.get('http://localhost:3000/posts')
        // console.log(posts);
        return posts.data
    }
    const {data,isLoading} = useQuery({queryKey:['posts'],queryFn:function(){
        console.log(data);
        return fetchData()
    }})
    
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((e)=>{
                        return (
                            <tr key={e.id}>
                                <td>{e.id}</td>
                                <td>{e.first}</td>
                                <td>{e.last}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default ListPosts