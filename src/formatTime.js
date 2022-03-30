

// nhan gia tri cua time khi execute 1 va no se la thoi gian ma dong ho da di qua
export const formatTime = (time) => {
   const tryZero = (number , length = 2  ) => {
     return String(number).padStart(length, "0" )
   };
  
  const getSeconds = time - getHours * 3600 - getMinutes * 60 ;       // ́́
  //const minutes = "Your code here"; 0
  const getMinutes = Math.floor((time - getHours * 3600) / 60 );
  const getHours = Math.floor(time / 3600);

  return `${tryZero(getHours)} : ${tryZero(getMinutes)} : ${tryZero(getSeconds)}`;
};
