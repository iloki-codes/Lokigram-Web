export const GLOBALTYPES = {
    AUTH: 'AUTH',
    ALERT: "ALERT",
    STORY: 'STORY',
    THEME: 'THEME',
    STATUS: 'STATUS',
    MODAL: 'MODAL',
    CALL: 'CALL',
    ONLINE: 'ONLINE',
    OFFLINE: 'OFFLINE'
}

export const EditData = (data, id, post) => {
    const newData = data?.map(item =>
        (item?._id === id ? post : item)
    )
    return newData;
}

export const DeleteData = (data, id) => {
    const newData = data?.filter(item => item?._id !== id)
    return newData;
}