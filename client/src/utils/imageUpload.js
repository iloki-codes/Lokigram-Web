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

    // const cloudinary = process.env.REACT_APP_CLOUDINARY_URL;

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

        const res = await fetch("https://api.cloudinary.com/v1_1/loki-codes/upload", {
            method: "POST",
            body: formData,
            reportProgress: true
        });

        const data = await res.json();

        imgArr.push({
            public_id: data?.public_id,
            url: data?.secure_url
        });

        console.log(data?.secure_url);
    }
    return imgArr;
}

// https://api.cloudinary.com/v1_1/loki-codes/upload
