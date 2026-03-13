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



  eventPage(data) {
    return request({
      url: `/api/topic/page`,
      method: "get",
      params: data
    });
  },

  eventInformation(id) {
    return request({
      url: `/api/topic/detail`,
      method: "get",
      params: { id }  // send the ID as query param
    });
  },
};


export default IndexAPI;

