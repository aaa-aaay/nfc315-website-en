import request from "@/utils/request";
const IndexAPI = {



  blogPage(data) {
    return request({
      url: `/api/manager/sysarticle/page`,
      method: "get",
      params:data
    });
  },

  fetchPostDetail(id) {
    return request({
      url: `/api/manager/sysarticle/info/${id}`,
      method: "get"
    });
  },
  getPreAndNext(id) {
    return request({
      url: `/api/manager/sysarticle/getPreAndNext?id=${id}`,
      method: "get"
    });
  },
  saveMessage(data) {
    return request({
      url: `/api/manager/syscontactmsg/save`,
      method: "post",
      data
    });
  },



  eventPage(data) {
    return request({
      url: `/api/api/topic/page`,
      method: "get",
      params: data
    });
  },

};


export default IndexAPI;

