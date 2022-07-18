import Stories from './Stories';
import Posts from './Posts';
import Sidebar from './Sidebar';

function Corpo() {
    return (
        <div className="corpo">
            <div className="feed">
                <Stories />
                <Posts />
            </div>
            
            <Sidebar />
        </div>
    );
}

export default Corpo;