import MyAxios from "./MyAxios";

// 上传音频
export const uploadMusic = (formData, name, album) => {
    return MyAxios({
        method: 'POST',
        headers: {
            "Content-Type": "multipart/form-data",
        },
        url: `/upload/music?musicName=${name}&album=${album}`,
        data: formData
    })
}

// 下载歌词
export const downloadWord = (data, name) => {
    return MyAxios({
        method: 'POST',
        url: `/upload/word?name=${name}`,
        data: data
    })
}
