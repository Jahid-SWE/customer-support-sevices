import { GoCalendar } from "react-icons/go";

const TicketCard = ({ customerTicket, inProgress, handleInProgress }) => {

    return (
        <article
            className="ticket-card p-4 bg-white rounded-md border border-slate-100 cursor-pointer"
            onClick={() => handleInProgress(customerTicket)}>
            <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                    <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-[18px] text-[#001931] ">{customerTicket?.title}</h4>
                        <span className={`flex items-center space-x-2 py-1 px-[10px] rounded-xl ${inProgress?.some((tks) => tks?.id === customerTicket?.id) ? "bg-[#F8F3B9] text-[#FEBB0C] " : "bg-emerald-100 text-emerald-300"}`}>
                            <span className={`w-[12px] h-[12px] rounded-full ${inProgress.some(t => t.id === customerTicket?.id) ? "bg-[#FEBB0C]" : "bg-emerald-500"}`}></span>

                            <span className="text-xs text-gray-700">
                                {inProgress.some(t => t.id === customerTicket?.id) ? "In Progress" : customerTicket?.status}
                            </span>
                        </span>
                    </div>
                    <p className="text-[16px] mt-2 text-[#627382] ">{customerTicket?.description?.length > 106 ? customerTicket.description.slice(0, 106) + "..." : customerTicket.description}</p>
                    <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                        <div className="flex items-center gap-4">
                            <span className="font-mono text-[14px]">#{customerTicket?.id}</span>
                            <span className="uppercase text-amber-600 text-[14px] font-semibold">{customerTicket?.priority}</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="ml-auto text-[14px]">{customerTicket?.customer}</span>
                            <span className="ml-auto flex gap-1 text-[14px] items-center"><GoCalendar />{new Date(customerTicket?.createdAt).toLocaleDateString()}</span>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default TicketCard;