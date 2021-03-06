/**
 * Created by chuangchuangzhang on 2018/2/2.
 */
import Vue from 'vue'
export default {
  /* SET_ACTIVE_TYPE: (state, { type }) => {
    state.activeType = type
  },

  SET_LIST: (state, { type, ids }) => {
    state.lists[type] = ids
  },

  SET_ITEMS: (state, { items }) => {
    items.forEach(item => {
      if (item) {
        Vue.set(state.items, item.id, item)
      }
    })
  },

  SET_USER: (state, { id, user }) => {
    Vue.set(state.users, id, user || false) /!* false means user not found *!/
  }, */

  SET_APPS: (state, { contents }) => {
    state.apps = contents
  },

  SET_APP_URI: (state, { fullPath }) => {
    state.navbars[state.NAVBAR_APP_INDEX].url = fullPath
  },

  /**
   * 打开app时需要设置navbar
   * @param state
   * @param app
   * @constructor
   */
  OPEN_APP: (state, { app, url = '' }) => {
    if (state.navbars[state.NAVBAR_APP_INDEX].id === 'App') {
      for (let i in app) {
        state.navbars[state.NAVBAR_APP_INDEX][i] = app[i]
      }
      state.navbars[state.NAVBAR_APP_INDEX].show = true
    } else {
      state.navbars = state.navbars.map(navbar => {
        if (navbar.id === 'App') {
          for (let i in app) {
            navbar[i] = app[i]
          }
          navbar.show = true
        }
        return navbar
      })
    }
  },

  /**
   * 设置获取的数据
   * @param state
   * @param tableData
   * @constructor
   */
  SET_DATA: (state, { contents, target }) => {
    Vue.set(target, 'data', contents)
    /* for (let i in state.navbars) {
      if (state.navbars[i].id === 'App') {
        for (let j in tableData) {
          if (state.navbars[i].data[j] === undefined) {
            Vue.set(state.navbars[i].data, j, tableData[j])
          } else {
            state.navbars[i].data[j] = tableData[j]
          }
        }
        break
      }
    } */
    /* state.navbars.map(navbar => {
      if (navbar.id === 'App') {
        for (let i in tableData) {
          if (navbar.data[i] === undefined) {
            Vue.set(navbar.data, i, tableData[i])
          } else {
            navbar.data[i] = tableData[i]
          }
        }
      }
      return navbar
    }) */
  },

  SET_LINE_ACTIVITY: (state, { tr }) => { // 设置表格、List活跃行
    // state.activeLine = tr
    Vue.set(tr, 'checked', !tr.checked)
  },

  SET_INACTIVE_LINES: (state, { table }) => {
    table.map(__ => {
      Vue.set(__, 'checked', false)
    })
  },

  SET_RELOAD: (state, { reload }) => { // 判断是否需要重新载入
    state.reload = reload
  },

  RESET_CARD: (state, { card }) => {
    card.data.num = 0 // 总数量
    card.data.p = 1 // 当前页数
    card.data.pn = 0 // 总页数
    card.data.content = {}
  }
}
