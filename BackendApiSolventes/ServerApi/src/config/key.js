const _module = {
    getStorageAccountName: () => {
        if (typeof process.env.AZURE_STORAGE_CONNECTION_STRING !== 'undefined') {
            const matches = /AccountName=(.*?);/.exec(process.env.AZURE_STORAGE_CONNECTION_STRING);
            return matches[1];
        } else {
            const matches = process.env.AZURE_STORAGE_ACCOUNT;
            return matches;
        }
    }
};
module.exports = _module;