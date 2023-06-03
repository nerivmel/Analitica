import DragDrop from "@/components/DragDrop"
import PrivNavBar from "@/components/PrivNavBar";
import RouteProvider from "@/components/RouteProvider";


const dragDrop = () => {
    return (
        <div>
            <PrivNavBar />
            <div className="rectangle">
                <div className="rec-main">
                    <DragDrop />
                </div>
            </div>
        </div>
    )
}

export default dragDrop