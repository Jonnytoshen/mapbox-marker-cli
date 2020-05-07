#!/usr/bin/env node

const { program } = require('commander');
const generateConfig = require('../src/generate-config');
const mapboxMarkerDownload = require('../src/mapbox-marker-download');

program
    .command('symbol <symbol> [folder]')
    .description('下载指定图标的 markers.')
    .action((symbol, folder) => {
        const config = generateConfig(symbol);
        mapboxMarkerDownload(config, folder, (name, filename) => {
            console.log(name, 'download success!', filename);
        }, (name, error) => {
            console.log(name, 'download fail', error);
        });
    });


program.parse(process.argv);
 
if (program.float !== undefined) console.log(`float: ${program.float}`);
if (program.integer !== undefined) console.log(`integer: ${program.integer}`);
if (program.verbose > 0) console.log(`verbosity: ${program.verbose}`);
// if (program.collect.length > 0) console.log(program.collect);
if (program.list !== undefined) console.log(program.list);