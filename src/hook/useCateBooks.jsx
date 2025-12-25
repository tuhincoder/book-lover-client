import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";



const useCateBooks = () => {
    const axiosPublic = useAxiosPublic()
    const { data: categoriesBook = [], isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await axiosPublic.get('/categories-book')
            // const res = await axios.get('http://localhost:5000/categories-book')
            // .then(res => console.log(res.data))
            console.log(res.data);
            return res.data
        }
    })
    return [categoriesBook, isLoading];
};

export default useCateBooks;