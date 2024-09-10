'use client';

import React, { useState, useEffect, useMemo } from 'react';

interface Stream {
  id: number;
  songName: string;
  artist: string;
  dateStreamed: string;
  streamCount: number;
  userId: string;
}

type SortKey = 'dateStreamed' | 'streamCount';
type SortOrder = 'asc' | 'desc';

const DataTable: React.FC = () => {
  const [streams, setStreams] = useState<Stream[]>([]);
  const [sortKey, setSortKey] = useState<SortKey>('dateStreamed');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');
  const [filterArtist, setFilterArtist] = useState('');
  const [filterSong, setFilterSong] = useState('');

  useEffect(() => {
    // Simulating API call
    setTimeout(() => {
      setStreams([
        { id: 1, songName: 'Anti-Hero', artist: 'Taylor Swift', dateStreamed: '2023-04-01', streamCount: 1234567, userId: 'user1' },
        { id: 2, songName: 'As It Was', artist: 'Harry Styles', dateStreamed: '2023-04-02', streamCount: 1123456, userId: 'user2' },
        { id: 3, songName: 'About Damn Time', artist: 'Lizzo', dateStreamed: '2023-04-03', streamCount: 1012345, userId: 'user3' },
        { id: 4, songName: 'Bad Habit', artist: 'Steve Lacy', dateStreamed: '2023-04-04', streamCount: 901234, userId: 'user4' },
        { id: 5, songName: 'Heat Waves', artist: 'Glass Animals', dateStreamed: '2023-04-05', streamCount: 890123, userId: 'user5' },
      ]);
    }, 1000);
  }, []);

  const sortedAndFilteredStreams = useMemo(() => {
    return streams
      .filter(stream => 
        stream.artist.toLowerCase().includes(filterArtist.toLowerCase()) &&
        stream.songName.toLowerCase().includes(filterSong.toLowerCase())
      )
      .sort((a, b) => {
        if (sortKey === 'dateStreamed') {
          return sortOrder === 'asc' 
            ? new Date(a.dateStreamed).getTime() - new Date(b.dateStreamed).getTime()
            : new Date(b.dateStreamed).getTime() - new Date(a.dateStreamed).getTime();
        } else {
          return sortOrder === 'asc' 
            ? a.streamCount - b.streamCount
            : b.streamCount - a.streamCount;
        }
      });
  }, [streams, sortKey, sortOrder, filterArtist, filterSong]);

  const handleSort = (key: SortKey) => {
    if (key === sortKey) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('desc');
    }
  };

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-white">Recent Streams</h2>
      <div className="mb-4 flex space-x-4">
        <input
          type="text"
          placeholder="Filter by artist"
          value={filterArtist}
          onChange={(e) => setFilterArtist(e.target.value)}
          className="px-2 py-1 bg-gray-700 text-white rounded"
        />
        <input
          type="text"
          placeholder="Filter by song"
          value={filterSong}
          onChange={(e) => setFilterSong(e.target.value)}
          className="px-2 py-1 bg-gray-700 text-white rounded"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-800 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-4 py-2 text-left text-gray-300">Song Name</th>
              <th className="px-4 py-2 text-left text-gray-300">Artist</th>
              <th 
                className="px-4 py-2 text-left text-gray-300 cursor-pointer"
                onClick={() => handleSort('dateStreamed')}
              >
                Date Streamed {sortKey === 'dateStreamed' && (sortOrder === 'asc' ? '↑' : '↓')}
              </th>
              <th 
                className="px-4 py-2 text-left text-gray-300 cursor-pointer"
                onClick={() => handleSort('streamCount')}
              >
                Stream Count {sortKey === 'streamCount' && (sortOrder === 'asc' ? '↑' : '↓')}
              </th>
              <th className="px-4 py-2 text-left text-gray-300">User ID</th>
            </tr>
          </thead>
          <tbody>
            {sortedAndFilteredStreams.map((stream) => (
              <tr key={stream.id} className="border-b border-gray-700">
                <td className="px-4 py-2 text-white">{stream.songName}</td>
                <td className="px-4 py-2 text-white">{stream.artist}</td>
                <td className="px-4 py-2 text-white">{stream.dateStreamed}</td>
                <td className="px-4 py-2 text-white">{stream.streamCount.toLocaleString()}</td>
                <td className="px-4 py-2 text-white">{stream.userId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DataTable;