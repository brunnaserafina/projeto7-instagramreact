import Stories from './Stories';
import Posts from './Posts';
import Sidebar from './Sidebar';

function Corpo() {
    return (
        <div class="corpo">
            <div class="feed">
                <Stories />
                <Posts />
            </div>
            
            <Sidebar />
        </div>
    );
}

export default Corpo;