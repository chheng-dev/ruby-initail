import { Controller } from "@hotwired/stimulus"
import _ from "lodash"

export default class extends Controller {
  connect() {
    this.element.textContent = "Hello!"
  }
  handleClick(){
    // this.element.textContent = "Clicked !"
    this.element.textContent = _.intersection([2,1],[1,4])
  }
}
