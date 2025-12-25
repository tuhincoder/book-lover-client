import Container from "../../component/common/Container";
import useAuth from "../../hook/useAuth";
import useRegistration from "../../hook/useRegistration";

const BookingRegistration = () => {
    const [registrations, refetch, isLoading] = useRegistration()
    const { user } = useAuth()

    return (
        <Container>
            <div className="h-screen">
                <div className="flex max-w-[350px] mx-auto flex-col items-center justify-center space-y-4 rounded-xl bg-white p-8 shadow-lg dark:bg-[#18181B]">
                    <div className="group relative">
                        <img width={110} height={110} className="h-[110px] w-[110px] rounded-full bg-slate-500 object-cover" src={user?.photoURL} alt="user image" />
                        <span className="absolute bottom-3 right-0 h-5 w-5 rounded-full border-[3px] border-white bg-green-500 dark:border-[#18181B]"></span>
                        <span className="absolute bottom-3 right-0 h-5 w-5 animate-ping rounded-full bg-green-500"></span>
                    </div>
                    <div className="space-y-1 text-center">
                        <h1 className="text-2xl text-gray-700 dark:text-white/90">{user?.displayName}</h1>
                        <p className="text-sm text-gray-400">Booking registration</p>
                    </div>
                    <div className="flex w-full justify-between py-2">
                        <div className="space-y-1 text-center">
                            <p className="text-gray-500 dark:text-white/70">Registration</p>
                            <p className="font-mono text-sm text-gray-700 dark:text-white/50">{registrations.length}</p>
                        </div>
                        <div className="space-y-1 text-center">
                            <p className="text-gray-500 dark:text-white/70">Phone</p>
                            <p className="font-mono text-sm text-gray-700 dark:text-white/50">{registrations[0]?.phone}</p>
                        </div>
                        <div className="space-y-1 text-center ">
                            <p className="text-gray-500 dark:text-white/70">date</p>
                            <p className="font-mono text-sm text-gray-700 dark:text-white/50">{registrations[0]?.date}</p>
                        </div>
                    </div>
                    {/* bio  */}
                    <p className="pb-2 text-center text-sm text-gray-500">{registrations[0]?.text}</p>
                    {/* social icons  */}
                    <div className="flex justify-between gap-4 py-2">
                        {registrations?.map((svg, idx) => (
                            <div key={idx} className="rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  duration-300 hover:scale-150">
                                {svg?.svg}
                            </div>
                        ))}
                    </div>
                    <button className="w-full rounded-full py-2 text-[12px] font-semibold text-sky-700 ring-1 ring-sky-700 hover:bg-sky-700 hover:text-white sm:text-sm md:text-base">View Profile</button>
                </div>
            </div>
        </Container>
    );
};

export default BookingRegistration;