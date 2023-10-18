const isEmpty = (data) => {
    return data?.trim() === "" || data === undefined || data === null || data === " ";
}

export default isEmpty;