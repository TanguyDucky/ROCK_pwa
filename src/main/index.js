import { state } from "cerebral";
import { set } from "cerebral/factories";

export default {
  state: {
    title: "Hello from Cerebral"
  },
  sequences: {
    toggleTitle: [set(state`title`, "You toggled me!")]
  }
};
