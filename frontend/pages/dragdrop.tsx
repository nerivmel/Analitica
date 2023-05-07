import NavBarPriv from "@/components/NavBarPriv";
import NavBar from "@/components/NavBar";
import DragDrop from "@/components/DragDrop"


const dragDrop = () => {
    return (
        <div>
            <NavBar/>
            <div className="rectangle">
                <div className="rec-main">
                    <DragDrop/>
                </div>
            </div>

        </div>
    )
}

export default dragDrop