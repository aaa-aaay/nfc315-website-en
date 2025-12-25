import request from "@/utils/request";
const IndexAPI = {



  blogPage(data) {
    return request({
      url: `/manager/sysarticle/page`,
      method: "get",
      params:data
    });
  },

  fetchPostDetail(id) {
    return request({
      url: `/manager/sysarticle/info/${id}`,
      method: "get"
    });
  },
  getPreAndNext(id) {
    return request({
      url: `/manager/sysarticle/getPreAndNext?id=${id}`,
      method: "get"
    });
  },
  saveMessage(data) {
    return request({
      url: `/manager/syscontactmsg/save`,
      method: "post",
      data
    });
  },

};


export default IndexAPI;

