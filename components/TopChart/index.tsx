const TopChart: React.FC<any> = ({ channels, total }) => {

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

      
    </div>
  );
};

export default TopChart;
