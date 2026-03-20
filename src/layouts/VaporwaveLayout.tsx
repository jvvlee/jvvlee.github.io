import { Outlet } from 'react-router-dom';

const VaporwaveLayout = () => {
    return (
        <div className="App vaporwave-bg">
            <Outlet />
        </div>
    )
}

export default VaporwaveLayout;