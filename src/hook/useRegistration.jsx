import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useRegistration = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  const {
    data: registrations = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["registration", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`registerForm?email=${user?.email}`);
      return res.data;
    },
  });
  return [registrations, refetch, isLoading];
};

export default useRegistration;
