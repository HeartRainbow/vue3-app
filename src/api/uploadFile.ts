import axios from "axios";

export async function uploadFile(event) {
    const files: Blob[] = event.target.files;
    console.log(Object.entries(files));
    
    let formData = new FormData();
    for(const [key, value] of Object.entries(files)) {
        formData.append(`file${key}`, value);
    }
    
    const res = await axios.request({
      url: '/api/files/upload',
      method: 'POST',
      transformRequest: [function(data, headers) {
        // 去除post请求默认的Content-Type
        delete headers.post['Content-Type']
        return data
      }],
      data: formData
    })
    console.log(res.data);
  }
  