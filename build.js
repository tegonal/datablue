const s = require('shelljs');

s.rm('-rf', 'build');
s.mkdir('build');
s.cp('build.info.js', 'build/build.info.js');
s.cp('.env', 'build/.env');
s.cp('-R', 'public', 'build/public');
s.mkdir('-p', 'build/server/common/swagger');
s.cp('server/common/swagger/Api.yaml', 'build/server/common/swagger/Api.yaml');
