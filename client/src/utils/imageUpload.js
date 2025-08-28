export const checkImage = (file) => {
    let err = "";
    if(!file) return err = "File does not exist."

    if(file.size > 1024 * 1024 * 5) // 5mb
    err = "The largest image size is 5mb."

    if(file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/jpg')
    err = "Image format is incorrect."

    return err;
}


export const imageUpload = async (images) => {
    let imgArr = [];
    for(const item of images){
        const formData = new FormData();

        if(item.camera){
            formData.append("file", item.camera);
        }else{
            formData.append("file", item)
        }

        formData.append("upload_preset", "Lokigram-web");
        formData.append("cloud_name", "loki-codes");

        const res = await fetch("https://723616939867417:SNIcbtpEYptGiuOXqkwDQVU3SX4@api.cloudinary.com/v1_1/loki-codes/upload", {
            method: "POST",
            body: formData,
            reportProgress: true
        });

        const data = await res.json()
        imgArr.push({
            public_id: data.public_id,
            url: data.secure_url
        });
    }
    return imgArr;
}

//CLOUDINARY_URL=cloudinary://723616939867417:SNIcbtpEYptGiuOXqkwDQVU3SX4@loki-codes
// https://api.cloudinary.com/v1_1/loki-codes/upload
