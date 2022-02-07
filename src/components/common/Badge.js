

export default function Badge({ item, className }) {
    return (
        <div className={"badge " + (item.startDate < Date.now() ? "live " : item.cancelled ? "cancelled " : "upcoming ") + (className ? className : "")}>
            {item.startDate < Date.now() ? "Sale Live" : item.cancelled ? "Cancelled" : "Upcoming"}
        </div>
    );
}
