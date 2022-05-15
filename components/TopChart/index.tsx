import { Key } from "react";
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const TopChart: React.FC<any> = ({ channels, total }) => {
    const [data, setCharts] = useState(channels);
    const [hasMore, setHasMore] = useState(true);

    const getMorePost = async () => {
        const res = await fetch(
            `https://api.holotools.app/v1/channels?offset=${data.length}&_limit=10`
        );
        const { channels } = await res.json();
        setCharts((data: any) => [...data, ...channels]);
        if (total == data.length) {
            setHasMore(false);
        }
    };

    return (
        <div className="w-full mt-5 space-y-2">
            <div className="px-4">
                <div className="font-medium text-lg">Top Chart</div>
                <div className="flex space-x-2">
                    
                    <div className="dropdown">
                        <label tabindex="0" className="btn m-1">
                            Click
                        </label>
                        <ul
                            tabindex="0"
                            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <a>Item 1</a>
                            </li>
                            <li>
                                <a>Item 2</a>
                            </li>
                        </ul>
                    </div>
                    
                    <div className=""> Thailand </div>
                    <div className=""> All </div>
                </div>
            </div>

            <InfiniteScroll
                className="w-full mt-5 space-y-2"
                dataLength={data?.length}
                next={getMorePost}
                hasMore={hasMore}
                loader={<button className="btn loading">loading</button>}
                endMessage={<h4></h4>}
            >
                {data.map((channel: { id: Key | null | undefined; name: string }) => {
                    return (
                        <div key={channel.id} className="space-y-1">
                            <div className="flex justify-between px-[5%] items-center bg-black bg-opacity-20 rounded-md h-[100px] w-full text-2xl">
                                <div className="">{channel.id}</div>
                                <div>{channel.name}</div>
                            </div>
                        </div>
                    );
                })}
            </InfiniteScroll>
        </div>
    );
};

export default TopChart;
