module.exports = {
  targets: {
    frontend: {
      createFolder: false,
      html: {
        default: 'index.tpl.html',
      },
    },
    gateway: {
      hasFolder: 'true',
      runnerOptions: {
        build: ['frontend'],
      },
    },
    copy: {
      enabled: true,
      items: [
        '.nvmrc',
        'config',
        'package.json',
        'package-lock.json',
      ],
      copyOnBuild: {
        targets: ['gateway'],
      },
    },
    version: {
      revision: {
        enabled: true,
        createRevisionOnBuild: {
          targets: ['gateway'],
        },
      },
    },
    plugins: [],
  },
};
