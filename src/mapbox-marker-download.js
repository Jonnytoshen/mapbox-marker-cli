const path = require('path');
const download = require('image-downloader');

module.exports = function(config, folder, callback, errorCallback) {
    const folderPath = folder || process.cwd();
    const downloader = function(index) {
        const c = config[index];
        download.image({ url: c.url, dest: path.join(`${folderPath}`, c.name) })
            .then(({ filename, image }) => {
                if (typeof callback === 'function') callback(c.name, filename);
                if (index < config.length - 1) downloader(index+1);
            })
            .catch((error) => {
                if (typeof errorCallback === 'function') errorCallback(c.name, error);
            });
    }

    downloader(0);
}