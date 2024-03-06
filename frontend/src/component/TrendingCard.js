import React, { useEffect } from 'react';
import axios from 'axios';

const TrendingCard = () => {
  const [trendingCoins, setTrendingCoins] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/search/trending');
        const data = response.data.coins.slice(0, 3);
        setTrendingCoins(data);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  

  return (
    <div className='flex flex-col md:w-96 p-2 md:mr-14 bg-white rounded-lg mt-5 '>
      <div className='text-2xl font-semibold'>Trending Coins (24h)</div>
      <div className='flex flex-col mt-5'>
        {trendingCoins.map((coin) => (
          <div key={coin.item.id} className='flex justify-between items-center p-2 '>
            <div className='flex items-center'>
              <img
                className='w-8 h-8 rounded-full'
                src={coin.item.small}
                alt={coin.item.name}
              />
              <div className='ml-3'>{coin.item.name}</div>
            </div>
            <div className={coin.item.data.price_change_percentage_24h.aed >= 0 ? 'text-green-500' : 'text-red-500'}>
  {coin.item.data.price_change_percentage_24h.aed >= 0 ? '+' : ''}
  {coin.item.data.price_change_percentage_24h.aed.toFixed(4)}
</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingCard;
