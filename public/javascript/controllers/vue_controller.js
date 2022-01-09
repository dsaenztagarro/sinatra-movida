import { Controller } from "@hotwired/stimulus"
import Vue from "vue"
import * as Components from  "../components/index"

// Globally register Vue components defined as Single File
Vue.component('box', Components.Box)

export default class extends Controller {
  static targets = ["wrapper"]

  connect() {
    this.vm = new Vue({
      el: this.wrapperTarget
    })
  }

  disconnect() {
    this.vm.$destroy()
  }
}
