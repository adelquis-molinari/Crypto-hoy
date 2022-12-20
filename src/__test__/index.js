//test de renderizado de app con vitest

import { render } from "vitest";
import App from "../App.vue";

test("renders app", () => {
  const { html } = render(App);
  expect(html).toMatchSnapshot();
});
