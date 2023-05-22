import gulp from 'gulp';
import bump from './gulp/bump';

const os = require('os');
if (os.platform() === 'win32' || os.platform() === 'linux' || os.platform() === 'darwin') {
  const fs = require('fs');
}

const bumps = ['patch', 'minor', 'major'];
bumps.forEach((type) => {
  gulp.task(`bump:${type}`, () => bump(type));
});
