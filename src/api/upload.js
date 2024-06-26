import MyAxios from "./MyAxios";

// 注册
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
