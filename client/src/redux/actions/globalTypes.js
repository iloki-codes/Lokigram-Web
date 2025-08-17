export const GLOBALTYPES = {
    AUTH: 'AUTH',
    ALERT: "ALERT",
    STORY: 'STORY',
    SOCKET: 'SOCKET',
    THEME: 'THEME',
    STATUS: 'STATUS',
    MODAL: 'MODAL',
    PEER: 'PEER'
}

export const EditData = (data, id, post) => {
    const newData = data.map(item =>
        (item._id === id ? post : item)
    )
    return newData;
}

export const DeleteData = (data, id) => {
    const newData = data.filter(item => item._id !== id)
    return newData;
}