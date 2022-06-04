import server from "..";
//获取歌单详情页数据
export function getMusicItemList(data){
    return server({
      method: "GET",
      url: `/playlist/detail?id=${data}`,
    });
}