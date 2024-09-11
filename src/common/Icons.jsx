export function Check({ width, height }) {
  return (
    <svg
      width={width || "60"}
      height={height || "60"}
      viewBox="0 0 92 95"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1720_2865)">
        <path
          d="M48.8981 5.97273C43.2338 5.96204 37.6232 7.10682 32.3884 9.34132C27.1537 11.5758 22.398 14.8561 18.3944 18.9937C1.5756 36.3609 1.5756 64.6115 18.4001 81.9787C35.2189 99.3399 62.5774 99.3399 79.3961 81.9787C96.2091 64.6115 96.2091 36.3609 79.3961 18.9937C75.3948 14.8562 70.6411 11.5759 65.4082 9.34133C60.1754 7.10677 54.5665 5.96198 48.9039 5.97273H48.8981ZM48.8981 11.8746C58.4546 11.8746 68.0111 15.6449 75.3251 23.1915C78.8012 26.773 81.559 31.0274 83.4407 35.711C85.3224 40.3946 86.2909 45.4155 86.2909 50.4862C86.2909 55.5568 85.3224 60.5777 83.4407 65.2613C81.559 69.9449 78.8012 74.1993 75.3251 77.7809C71.8567 81.3703 67.7366 84.2181 63.2009 86.1611C58.6652 88.1041 53.8029 89.1043 48.8924 89.1043C43.9818 89.1043 39.1195 88.1041 34.5838 86.1611C30.0481 84.2181 25.9281 81.3703 22.4596 77.7809C18.9835 74.1993 16.2257 69.9449 14.344 65.2613C12.4623 60.5777 11.4938 55.5568 11.4938 50.4862C11.4938 45.4155 12.4623 40.3946 14.344 35.711C16.2257 31.0274 18.9835 26.773 22.4596 23.1915C25.927 19.5994 30.0477 16.7503 34.585 14.8082C39.1222 12.866 43.9865 11.8691 48.8981 11.8746ZM65.9181 38.6052C65.3736 38.6581 64.855 38.8703 64.4231 39.2168L43.4126 55.4856L33.6779 45.4393C33.4126 45.1558 33.0954 44.9296 32.7446 44.774C32.3939 44.6184 32.0166 44.5365 31.6349 44.5331C31.2531 44.5297 30.8746 44.6048 30.5212 44.754C30.1679 44.9033 29.8469 45.1238 29.577 45.4025C29.307 45.6812 29.0935 46.0127 28.949 46.3776C28.8044 46.7424 28.7317 47.1333 28.735 47.5275C28.7383 47.9217 28.8176 48.3113 28.9683 48.6735C29.119 49.0357 29.338 49.3633 29.6126 49.6371L41.1126 61.5121C41.6014 62.0171 42.25 62.3232 42.9396 62.3745C43.6292 62.4257 44.3136 62.2186 44.8674 61.7912L67.8674 43.9787C68.3547 43.6119 68.718 43.0961 68.9059 42.5043C69.0937 41.9126 69.0966 41.2748 68.9141 40.6813C68.7316 40.0877 68.373 39.5685 67.889 39.197C67.405 38.8255 66.8201 38.6205 66.2171 38.6112C66.1194 38.606 66.0215 38.606 65.9239 38.6112L65.9181 38.6052Z"
          fill="#C1FD35"
        />
      </g>
      <defs>
        <clipPath id="clip0_1720_2865">
          <rect width="92" height="95" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function Search({ width, height }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "20"}
      height={height || "20"}
      viewBox="0 0 24 24"
    >
      <g fill="none" stroke="currentColor">
        <circle cx="11" cy="11" r="6" />
        <path strokeLinecap="round" d="m20 20l-3-3" />
      </g>
    </svg>
  );
}

export function Circle({ width, height, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "30"}
      height={height || "30"}
      viewBox="0 0 24 24"
    >
      <path
        fill="#C1FD35"
        d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
      />
    </svg>
  );
}

export function Arrow({ width, height, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "20"}
      height={height || "20"}
      viewBox="0 0 15 15"
    >
      <path
        fill={color || "currentColor"}
        d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414"
      />
    </svg>
  );
}

export function Burguer({ width, height, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "40"}
      height={height || "40"}
      viewBox="0 0 24 24"
    >
      <path fill="#C1FD35" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z" />
    </svg>
  );
}

export function Edit({ width, height, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "20"}
      height={height || "20"}
      viewBox="0 0 24 24"
    >
      <path
        fill={color || "currentColor"}
        d="M3 21v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15t.775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21zM17.6 7.8L19 6.4L17.6 5l-1.4 1.4z"
      />
    </svg>
  );
}

export function Copy({ width, height, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "25"}
      height={height || "25"}
      viewBox="0 0 32 32"
    >
      <path
        fill={color || "currentColor"}
        d="M28 10v18H10V10zm0-2H10a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2"
      />
      <path fill="currentColor" d="M4 18H2V4a2 2 0 0 1 2-2h14v2H4Z" />
    </svg>
  );
}

export function Plus({ width, height, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "30"}
      height={height || "30"}
      viewBox="0 0 256 256"
    >
      <path
        fill={color || "currentColor"}
        d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m44-92a4 4 0 0 1-4 4h-36v36a4 4 0 0 1-8 0v-36H88a4 4 0 0 1 0-8h36V88a4 4 0 0 1 8 0v36h36a4 4 0 0 1 4 4"
      />
    </svg>
  );
}
