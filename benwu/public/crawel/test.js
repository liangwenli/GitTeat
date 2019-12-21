const http = require('http')
const { insert } = require("./db");
http
  .get(
    "http://shopapi.smartisan.com/mobile/skulist",
    res => {
      res.setEncoding("utf8");
      let rawData = "";
      res.on("data", chunk => {
        rawData += chunk;
      });
      res.on("end", () => {
        // console.log(rawData);
        // console.log(JSON.parse(rawData));
        let entries = JSON.parse(rawData).data;
        console.log(entries);
        // entries.forEach(skulist => {
        //   insert("skulist", [
        //     {
        //       skuName: skulist.skuName
        //     }
        //   ]);
        // });
      });
    }
  )
  .on("error", e => {
    console.error(`出现错误: ${e.message}`);
  });
