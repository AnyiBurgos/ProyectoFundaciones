import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faBuilding,
  faImages,
  faAt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faHome, faBuilding, faImages, faAt);

Vue.component("font-awesome-icon", FontAwesomeIcon);