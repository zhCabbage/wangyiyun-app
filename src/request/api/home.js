import server from "..";
// 获取首页轮播图得数据
export function getBanner(){
    return server({
      method: "GET",
      url: "/banner?type=2",
    });
}

// 获取发现好歌单
export function getMusicList() {
  return server({
    method: "GET",
    url: "/personalized?limit=10",
  });
}