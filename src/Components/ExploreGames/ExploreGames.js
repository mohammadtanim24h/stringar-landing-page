import React from 'react';
import './ExploreGames.css';

const ExploreGames = () => {
    return (
        <div className='mt-10 mb-10'>
            <div className='flex justify-between'>
                <div className='explore flex-1'>
                    <h2>Explore</h2>
                </div>
                <div className='games flex-1'>
                    <h2>Games</h2>
                </div>
            </div>
        </div>
    );
};

export default ExploreGames;