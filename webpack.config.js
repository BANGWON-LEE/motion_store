module.exports = {
   // ... 기존 설정 ...
   module: {
     rules: [
       // ... 기존 룰 ...
       {
         test: /\.svg$/,
         use: ['@svgr/webpack'],
       },
     ],
   },
 };
 