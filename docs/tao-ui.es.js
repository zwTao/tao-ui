import { createElementBlock as a, openBlock as d, normalizeClass as s, renderSlot as c, normalizeStyle as i } from "vue";
const l = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [o, n] of e)
    r[o] = n;
  return r;
}, p = {
  __name: "TaoButton",
  props: {
    type: { type: String, default: "default" }
  },
  setup(t) {
    return (e, r) => (d(), a("button", {
      class: s(["tao-button", [t.type]])
    }, [
      c(e.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}, f = /* @__PURE__ */ l(p, [["__scopeId", "data-v-f757bcd4"]]), _ = {
  name: "tao-border",
  props: {
    color: {
      type: String,
      default: "#000"
    },
    width: {
      type: [Number, String],
      default: 1
    },
    borderType: {
      type: String,
      default: "solid"
    },
    radius: {
      type: [Number, String],
      default: 0
    }
  },
  computed: {
    borderStyle() {
      return {
        borderColor: this.color,
        borderWidth: `${this.width}px`,
        borderStyle: this.borderType,
        borderRadius: `${this.radius}px`
      };
    }
  }
};
function b(t, e, r, o, n, u) {
  return d(), a("div", {
    class: s(["tao-border"]),
    style: i(u.borderStyle)
  }, [
    c(t.$slots, "default", {}, void 0, !0)
  ], 4);
}
const y = /* @__PURE__ */ l(_, [["render", b], ["__scopeId", "data-v-83a39d99"]]), m = [f, y], h = (t) => {
  m.forEach((e) => {
    t.component(e.name || e.__name, e);
  });
}, $ = { install: h };
export {
  y as TaoBorder,
  f as TaoButton,
  $ as default
};
