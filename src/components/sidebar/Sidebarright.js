import SidebarItem from "./Sidebaritem"
import items from "../../data/sidebarright.json"

export default function SidebarRight() {
    return (
        <div className="sidebar">
            { items.map((item, index) => <SidebarItem key={index} item={item}/>)}
        </div>
    )
}