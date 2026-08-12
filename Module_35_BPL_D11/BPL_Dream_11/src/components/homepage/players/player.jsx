import { use } from 'react';

const Player = ({ playerPromise }) => {
    const data = use(playerPromise)
    return (
        <div>
            Total Players: {data.length}
        </div>
    );
};

export default Player;
