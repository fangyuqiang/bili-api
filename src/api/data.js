module.exports = {
  follower: {
    require: ['stat'],
    get: async ({ stat }) => (await stat).data.follower
  },
  uname: {
    require: ['info'],
    get: async ({ info }) => (await info).data.name
  },
  sign: {
    require: ['info'],
    get: async ({ info }) => (await info).data.sign
  },
  guardNum: {
    require: ['topList'],
    get: async ({ topList }) => (await topList).data.info.num
  },
  liveStatus: {
    require: ['getRoomInfoOld'],
    get: async ({ getRoomInfoOld }) => (await getRoomInfoOld).data.liveStatus
  },
  title: {
    require: ['getRoomInfoOld'],
    get: async ({ getRoomInfoOld }) => (await getRoomInfoOld).data.title
  },
  online: {
    require: ['getRoomInfoOld'],
    get: async ({ getRoomInfoOld }) => (await getRoomInfoOld).data.online
  }
}
