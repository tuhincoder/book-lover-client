import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useCarts = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const {
    data: carts = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/carts?email=${user?.email}`);
      return res.data;
    },
  });
  return [carts, refetch, isLoading];
};

export default useCarts;
